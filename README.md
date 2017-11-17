# Rest API with PostgreSQL Demo
[Intermediate] Express Server, PostgresSQL, REST API

## Setup
- Fork and Clone
- run `npm init --yes`
- run `npm install`
- run `createdb todos`
- configure config.json file with your postgreSQL environment
  - mkdir `server/config` 
  - touch `server/config/config.json`
  - add the following code snippet
  ```
  {
    "development": {
      "username": "INSERT POSTGRESQL USER NAME", <-- Add your username
      "password": "INSERT PASSWORD", <-- Add your password, if no password set, use null
      "database": "todos",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres"
    }
  }
  ```
- cd into server directory then run `sequelize db:migrate`

## PostgreSQL Relational 
We will have two models `Todo` and `TodoItem`. The relationship between to the will be `one to many`, such that a `Todo` can have many `TodoItem` while a `TodoItem` can only belong to one `Todo`. 

## API Endpoints
Run the following on Postman

`Todo` Endpoints:
- POST `127.0.0.1:8000/api/todos/`
- GET(List all) `127.0.0.1:8000/api/todos/`
- GET(Specific) `127.0.0.1:8000/api/todos/:todoId`
- PUT `127.0.0.1:8000/api/todos/:todoId`
- DELETE `127.0.0.1:8000/api/todos/:todoId`

`TodoItem` EndPoints:
- POST `127.0.0.1:8000/api/todos/:todoId/items`


