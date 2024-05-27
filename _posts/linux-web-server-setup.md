---
title: 'Linux Web Server Setup'
excerpt: 'An overview of the first things I do when I spin up a fresh Debian VPS.'
date: '2024-05-27T17:20'
categories: ['dev', 'linux']
---

Some basic setup commands & configs that I use for new Debian web servers.

* [ufw](#uncomplicated-firewall)
* [fail2ban](#fail2ban)
* [nginx](#nginx)
* [nvm](#nvm)

### change ssh port (and disable root login later):
```bash
nano /etc/ssh/sshd_config
service sshd restart
```

### change hostname:
```bash
nano /etc/hostname
nano /etc/hosts
```

### add new user (to replace root):
```bash
useradd -m USERNAME
passwd USERNAME
```

### add new user to sudo:
```bash
usermod -aG sudo USERNAME
```

### set bash as default:
```bash
chsh -s /bin/bash USERNAME
```

---

## uncomplicated firewall
```bash
sudo apt-get install ufw
```

### allow ssh:
```bash
sudo ufw allow 22/tcp
sudo ufw status verbose
```

#### other rules examples:
```bash
sudo ufw allow 1111:1115/tcp
sudo ufw allow 1116:1119/udp
sudo ufw allow 'Nginx Full'
```

### delete a rule:
```bash
sudo ufw status numbered
sudo ufw delete 999
```

### setup defaults:
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

### enable or disable ufw:
```bash
sudo ufw enable
sudo ufw disable
```
_important: make sure you setup ssh access before enabling ufw._

---

## fail2ban
```bash
sudo apt-get install fail2ban
```

### check out the default jail:
```bash
sudo nano /etc/fail2ban/jail.conf
```

#### then create your local config:
```bash
sudo nano /etc/fail2ban/jail.local
```

```bash
[DEFAULT]
bantime = 3600
maxretry = 4

[sshd]
enabled = true
port = 22

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
port = http,https
```

### reload fail2ban:
```bash
sudo fail2ban-client reload
```

### check fail2ban status:
```bash
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

---

## nginx

### symlink a site config:
```bash
sudo ln -s /etc/nginx/sites-available/some.domain.conf /etc/nginx/sites-enabled/
```

### test nginx configs:
```bash
sudo nginx -t
```

### reload nginx:
```bash
sudo systemctl reload nginx
```

### obtain ssl cert via certbot:
```bash
sudo certbot certonly --nginx -d domain.com -d www.domain.com
```

#### certbot auto-renew via crontab:
```bash
sudo crontab -e
```

```bash
10 3 * * * /usr/bin/certbot renew --quiet
```

### allow nginx through ufw:
```bash
sudo ufw allow 'Nginx Full'
```

---

## node version manager ([?](https://github.com/creationix/nvm))

### install dependencies:
```bash
sudo apt-get update
sudo apt-get install build-essential libssl-dev
```

### install nvm:
```bash
mkdir ~/temp && cd ~/temp
```
_i like to have a temp directory in my home folder for cases like this where i'll have no use for the installer after it runs._

```bash
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.3/install.sh -o install_nvm.sh
```

```bash
bash install_nvm.sh
```

### install and use latest lts release:
```bash
nvm ls-remote
nvm install 6.9.4
nvm use 6.9.4
```

---

## github ssh

`ssh-keygen -t ed25519 -C "your_email@example.com"`

`eval "$(ssh-agent -s)"`

`~/.ssh/config`:

```bash
Host github.com
  User git
  Hostname github.com
  PreferredAuthentications publickey
  IdentityFile /home/user/.ssh/id_rsa
```
