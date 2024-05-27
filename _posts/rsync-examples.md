---
title: 'Rsync Examples'
excerpt: 'A few examples of how I use rsync to copy files between hosts and drives.'
date: '2024-05-27T16:40'
categories: ['dev']
---

A few examples of how I use [rsync](https://rsync.samba.org) to copy files between hosts and drives.

#### basic local sync:
```bash
rsync -hrtP /path/to/source/ /path/to/destination/
```

#### sync remote to local:
```bash
rsync -hrtP user@remote.com:/home/user/files/ /home/user/files/
```

#### sync local to remote:
```bash
rsync -hrtP /home/user/files/ user@remote.com:/home/user/files/
```

#### custom ssh port:
```bash
rsync -hrtP -e "ssh -p 4220" /home/user/files/ user@remote.com:/home/user/files/
```

---

### Explanation of Arguments

- `-h`: Human-readable format. This option outputs file sizes in a human-readable format (e.g., 1K, 1M, 1G) rather than in bytes.
- `-r`: Recursive. This option tells rsync to copy directories recursively, including all the files and subdirectories within the source directory.
- `-t`: Preserve modification times. This option ensures that the modification times of the files are preserved, meaning the destination files will have the same modification timestamps as the source files.
- `-P`: This is a combination of `--progress` and `--partial`:
    - `--progress`: Show progress during the transfer. This provides a detailed progress report for each file as it is being transferred.
    - `--partial`: Keep partially transferred files. If a transfer is interrupted, this option allows rsync to resume transferring only the remaining part of the file rather than starting over from the beginning.

---

### Additional Arguments to Consider

#### --delete

To delete anything found in the destination, which is not found in the source, add `--delete` to the end of your command.

#### --dry-run

To perform a dry-run which only logs the results without actually changing anything, add `--dry-run` to the end of your command.
