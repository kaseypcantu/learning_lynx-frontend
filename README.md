_Learning Lynx Frontend_
=========================

_A place to organize links and resources I wish to learn from_

### Deploy your own `Learning Lynx` instance

Deploy to [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)]()

Learning Lynx is a [Next.js](https://nextjs.org/docs/getting-started "Next.js Documentation") application built
with [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html "TypeScript Handbook") and
a [GraphQL API](https://graphql.org/ "GraphQL Official Site") backend.

- Deployed on [Vercel](https://vercel.com/ "Vercel Deployment").
- **CI/CD** via [GitLab CI/CD]() & [GitHub Actions]()

Local Development Environment
-----------------------------

### Prerequisites

- [ ] [Node.js v14](https://nextjs.org/docs "Next.js Documentation")
- [ ] [Yarn v1.22+](https://yarnpkg.com/ "Yarn Package Manager")
- [ ] [Docker v19+](https://docs.docker.com/ "Docker Documentation")
- [ ] [Docker-Compose v1.27+](https://docs.docker.com/compose/install/ "Install Docker Compose")

Getting Started
---------------

### Install Dependencies & Start the Server

Use `Yarn` to install project dependencies.

```bash
# Install dependencies with Yarn
yarn install
# Start the development Server:
yarn dev
```

Once you run this command you can visit the `Learning Lynx` frontend in your browser
at [http://localhost:3000/](http://localhost:3000/ "Learning Lynx Frontend"). This starts the server in `dev` mode and
watches the project for any changes.


Docker Development via [_Docker Compose_](https://docs.docker.com/compose/ "Docker Compose Overview")
=====================================================================================================

### Container Stack

- [Learning Lynx Frontend](https://hub.docker.com/r/kpcwebdev/learning_lynx-backend "Learning Lynx Frontend Docker Image")
- [Learning Lynx Backend]()
- [PostgreSQL](https://hub.docker.com/_/postgres "Official Postgres Image")
- [Redis](https://hub.docker.com/_/redis "Official Redis Image")
- [pgAdmin](https://hub.docker.com/r/dpage/pgadmin4 "pgAdmin Docker Image")
- [Adminer](https://hub.docker.com/_/adminer "Adminer Docker Image")
- [MailHog](https://hub.docker.com/r/mailhog/mailhog "MailHog Docker Image")

Start the stack with `Docker Compose`:

```bash
docker-compose up -d
```

- This will start the stack in daemon mode, meaning that it will just start all containers in the background. You can
  view the stack, **e.g.**:

```bash
# View all container logs
docker-compose logs
# View specific container logs
docker-compose logs backend
``` 

You can see the running services to confirm they are up and running, by using the following Docker command.

```bash
docker ps -a
```

### Docker Compose Services

| Docker Container | Hostname | Exposed Location | Description |
| ---------------- | -------- | ---------------- | ----------- |
|   `kpcwebdev/learning_lynx-backend:latest`   |   `backend`   | [http://localhost:1993/graphql](http://localhost:1993/graphql "Learning Lynx Backend") | Backend `GraphQL` Server |
|   `kpcwebdev/learning_lynx-frontend:latest`   |   `frontend`   | [http://localhost:3000/](http://localhost:3000/ "Learning Lynx Frontend") | Frontend `Next.js` Application |
|   `PostgreSQL`   |   `db`   | [http://localhost:5432/](http://localhost:5432/ "PostgreSQL Database Server") | PostgreSQL Database Server |
|   `Redis`        |   `redis`   | [http://localhost:6379/](http://localhost:6379/ "Redis Server") | Redis Server |
|   `pgAdmin`      |   `pgadmin`   | [http://localhost:5050/](http://localhost:5050/ "PostgreSQL Tools") | PostgreSQL Administration Tools |
|   `Adminer`      |   `adminer`   | [http://localhost:8080/](http://localhost:8080/ "Database Administration Tools") | Database Administration Tools |
|   `MailHog`      |   `adminer`   | [SMTP Port: `1025`](http://localhost:1025/ "SMTP Port") [MailHog UI Port: `8025`]( http://localhost:8025/) | Web and API based SMTP testing  |

- The `frontend` container volume has been mapped to the current working directory, this way you can make changes to the
  codebase while the containers are running and see the changes immediately.

[_Makefile_](https://www.gnu.org/software/make/manual/make.html#Values "Makefile Documentation")
================================================================================================
The `Makefile` provided will help in creating Docker images and deploying a `docker stack` to a `docker swarm` locally
or swarm composed of [DigitalOcean Droplets](). The following command will list available Make actions set in
the `Makefile`.

```bash
make help
```

