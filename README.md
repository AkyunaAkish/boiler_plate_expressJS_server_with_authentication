# Boiler_Plate_ExpressJS_Server_With_Authentication

## Technologies used:

```
Node.JS
NPM
Express.JS
Knex.JS
PostgreSQL
Bcrypt
JSONWebToken
```

### Setup Instructions:

#### Must Have:

- Postgres on your local machine (can be installed with brew on mac)
- Node.JS/NPM (can be installed with brew on mac)
- Knex.JS installed globally through NPM
- Nodemon installed globally through NPM

```
Fork/Clone
$ npm install
$ createdb your_database_name
$ touch .env
$ echo DATABASE_URL=postgres://localhost/your_database_name >> .env
$ echo SECRET=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env
$ knex migrate:latest
$ nodemon (this server will run on localhost:3000 by default and the default can be changed in the bin/www file)
```
