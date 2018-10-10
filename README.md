# Rest API with PostgreSQL Demo
[Intermediate] Express Server, PostgresSQL, REST API

## Installation
- Install Postgres for Windows https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  - Select version `9.6.10`
  - Select operating system `Windows x86-64`
  
- Install Postman https://www.getpostman.com/apps

- Install nodemon `npm install -g nodemon`

## Setup
- Fork and clone 
- run `npm init --yes`
- run `npm install`
- create a database called `my_todo_list` in your psql cli
- configure config.json file with your postgreSQL environment
  - mkdir `server/config`
  - touch `server/config/config.json`
  - add the following code snippet
  ```
  {
    "development": {
      "username": "INSERT POSTGRESQL USER NAME", <-- Add your username
      "password": "INSERT PASSWORD", <-- Add your password, if no password set, use null
      "database": "my_todo_list",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres"
    }
  }
  ```
- cd into server directory then run `sequelize db:migrate server`
- run `npm run start:dev` in your root project folder

## API Endpoints
Run the following on Postman

`Todo` Endpoints:
- POST `127.0.0.1:8000/api/todos/`
- GET(List all) `127.0.0.1:8000/api/todos/`
- GET(Specific) `127.0.0.1:8000/api/todos/:id`
- PUT `127.0.0.1:8000/api/todos/:id`
- DELETE `127.0.0.1:8000/api/todos/:id`
