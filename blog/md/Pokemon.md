---
title: Pokemon
tags: [room]

---


# Pokémon Gacha 

###### tags: `TryHackMe` `CTF` `Linux` `Privilege Escalation`

---

## 🔍 Reconnaissance

**Open ports:**

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
```

The directory scan didn't return anything useful, so the website's source code was reviewed instead.

---

## 🌐 Source Code Findings

**JavaScript snippet:**

```javascript
const randomPokemon = [
    'Bulbasaur', 'Charmander', 'Squirtle',
    'Snorlax', 'Zapdos', 'Mew',
    'Charizard', 'Grimer', 'Metapod', 'Magikarp'
];
const original = randomPokemon.sort((pokemonName) => {
    const [aLast] = pokemonName.split(', ');
});
console.log(original);
```

**Credentials hidden in the HTML:**

```html
<pokemon>:<hack_the_pokemon>
<!--(Check console for extra surprise!)-->
```

This reveals the credentials: user `pokemon`, password `hack_the_pokemon`.

---

## 🔑 SSH Access — User `pokemon`

Using those credentials to log in via SSH. Inside `/home/pokemon`, the following relevant files were found:

```
Desktop/
└── P0kEmOn.zip

Videos/
└── Gotta/
```

### Flag 1 — Grass Type 🌿

```bash
pokemon@root:~/Desktop$ unzip P0kEmOn.zip
pokemon@root:~/Desktop$ cat P0kEmOn/grass-type.txt
50 6f 4b 65 4d 6f 4e 7b 42 75 6c 62 61 73 61 75 72 7d
```

Decoding the hex:

```bash
cat P0kEmOn/grass-type.txt | xxd -r -p
# → PoKeMoN{Bulbasaur}
```

---

## ⬆️ Privilege Escalation — User `ash`

Exploring the `Videos` folder reveals a deeply nested path with a C++ file:

```bash
pokemon@root:~/Videos/Gotta/Catch/Them/ALL!$ cat Could_this_be_what_Im_looking_for?.cplusplus
```

```cpp
#include <iostream>
int main() {
    std::cout << "ash : pikapika"
    return 0;
}
```

New credentials: user `ash`, password `pikapika`.

```bash
su ash
sudo -l
# → (ALL : ALL) ALL

sudo bash
# → Root shell obtained ✓
```

---

## 💧 Flag 2 — Water Type

```bash
root@root:/# cat /var/www/html/water-type.txt
Ecgudfxq_EcGmP{Ecgudfxq}
```

This looks like a Caesar cipher. Brute-forcing ROT values reveals **ROT12** as the correct key.

---

## 🔥 Flag 3 — Fire Type

Searching for `.txt` files across the system:

```bash
find / -name "*.txt" 2>/dev/null
# → /etc/why_am_i_here?/fire-type.txt
```

```bash
root@root:/etc# cat /etc/why_am_i_here?/fire-type.txt
UDBrM20wbntDaGFybWFuZGVyfQ==
```

This is Base64 encoded. Decoding it reveals the third and final flag.

---

