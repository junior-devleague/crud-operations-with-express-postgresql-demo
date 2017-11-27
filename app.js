const express = require('express');
const bodyParser = require('body-parser');
const api = require('./server/routes/todos.js')

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/todos', api);

module.exports = app;
