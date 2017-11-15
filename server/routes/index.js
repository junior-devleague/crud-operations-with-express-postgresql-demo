const express = require('express');
const router = express.Router();
const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;


router.route('/todos')
  // Post a todo
  .post((req, res) => {
    Todo.create({
       title: req.body.title,
    })
     .then(todo => res.send(todo))
     .catch(error => res.send(error));
  })
  // Get all todos
  .get((req, res) => {
    Todo.findAll({
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
     .then((todo) => res.send(todo))
     .catch(error => res.send(error));
  })

// router.route('/todos/:id')
//   // Get a specific todo
//   .get((req, res) => {
//     Todo.findById({
//       req.params.todoId, {
//         include: [{
//           model: TodoItem,
//           as: 'todoItems',
//         }],
//       })
//       .then(todo => {
//         if (!todo) {
//           return res.status(404).send({
//             message: 'Todo Not Found',
//           });
//         }
//         return res.status(200).send(todo);
//       })
//       .catch(error => res.status(400).send(error));
//   })

  // // List all todos
  // app.get('/api/todos', todosController.list);
  // // Get a specific todo
  // app.get('/api/todos/:todoId', todosController.retrieve);
  // // Edit a todo
  // app.put('/api/todos/:todoId', todosController.update);
  // // Delete a todo
  // app.delete('/api/todos/:todoId', todosController.destroy);

  // // Post a todo item related to do
  // app.post('/api/todos/:todoId/items', todoItemsController.create);
module.exports = router