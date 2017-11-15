const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const api = require('./server/routes/index.js')
const Todo = require('./server/models').Todo;
const TodoItem = require('./server/models').TodoItem;

// Set up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api', api);
// Setup a default catch-all route that sends back a welcome message in JSON format.
// require('./server/routes')(app);

// app.get('*', (req, res) => res.status(200).send({
//   message: 'You are now connected',
// }))

module.exports = app;