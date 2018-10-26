# CRUD Routes with Express Server, Sequelize, and Postgres
[Intermediate] Explaining Restful API, CRUD, HTTP Verbs

## What is a RESTful API
- What is an API?
  - An API for a website is code that allows two software programs to communicate with each another.
- What is REST API?
  - Representational State Transfer
    - An application that uses HTTP requests to GET, PUT, POST and DELETE data.
    - It is a set of rules that developers follow when they create their API. 
    - The client and the server should be independent of each other
- HTTP Verbs
  - **GET:** Retrieve data from database to client 
  - **POST:** Submit data from client to database
  - **PUT:** Submit updated data for targeted value in database
  - **DELETE:** Deletes specific value from database
  
  ![CRUD Table](http://docs.railsbridge.org/job-board/img/crud_grid.jpg)


## Installation
- Install Postgres for Windows https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  - Select version `9.6.10`
  - Select operating system `Windows x86-64`
  
- Install Postman https://www.getpostman.com/apps

- Install nodemon `npm install -g nodemon`

## Setup
- Fork and clone 
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

## Resources
[Restful API](https://searchmicroservices.techtarget.com/definition/RESTful-API)
