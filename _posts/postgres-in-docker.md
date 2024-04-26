---
title: 'Postgres Docker Container Setup'
excerpt: 'A short guide to running a Postgres database inside a Docker container.'
date: '2024-04-26T10:17'
categories: ['dev']
---

I prefer running Postgres databases in Docker containers, instead of with the standalone MacOS app or Linux packages. Configuring and managing Postgres instances with Docker offers a way better dev experience (especially when paired with Postico 2) and has great support for targeting specific versions of Postgres.

## Files Needed for a Dockerized Postgres Instance

### docker-compose.yml

```yaml
services:
  db:
    image: postgres
    restart: always
    shm_size: 128mb
    env_file:
      - path: ./.env
        required: true
      - path: ./.env.local
        required: false
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
      - ./data:/var/lib/postgresql/data
    ports:
      - 5432:5432
```

#### Compose File Notes

* The first line under `volumes` initializes new databases with a hypothetical `init.sql` file. If you do not need this, simply remove that line to skip the initialization step.
* This config supports an *optional* `.env.local` file to add environment-specific overrides that can/should be added to `.gitignore`.

### .env

I use an `.env` file to track the expected/required fields, and override them in an `.env.local` file with actual logins on a per-environment basis.

This allows me to define the necessary connection values once for use on the Docker container configs and whatever CRUD app I might be building alongside the database.

```txt
POSTGRES_DB=db_name
POSTGRES_USER=db_user
POSTGRES_PASSWORD=db_pass
```

### .gitignore

Environment-specific overrides and Postgres database files should not be tracked in git.

```txt
.env.local
data
```

## Running The Postgres Docker Image

After setting up the config files above, you can run `docker compose up -d` in the project root to start the Postgres database instance.

To stop the database instance, run `docker compose down` in the same directory.
