const express = require('express');
const router = express.Router();
const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

router.route('/')
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
     .then(todo => res.send(todo))
     .catch(error => res.send(error));
  })

router.route('/:id')

  // Get a specific todo
  .get((req, res) => {
    Todo.findById(
      req.params.id, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.send({
            message: 'Todo Not Found',
          });
        }
        return res.send(todo);
      })
      .catch(error => res.send(error));
  })

  // Edit a specific todo
  .put((req, res) => {
    Todo.update({
      title: req.body.title,
    }, {
      where: {
        id : req.params.id
      }
    })
    .then((todo) =>{
      res.send('succesfully updated todo');
    })
    .catch(error => res.send(error));
  })

  // Delete a specific Todo
  .delete((req, res) => {
    Todo.destroy({
      where: {
        id : req.params.id
      }
    })
    .then((todo) =>{
      res.send('succesfully deleted todo');
    })
    .catch(error => res.send(error));
  })

module.exports = router