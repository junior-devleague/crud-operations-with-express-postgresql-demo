const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  // Post a todo
  app.post('/api/todos', todosController.create);
  // List all todos
  app.get('/api/todos', todosController.list);
  // Get a specific todo
  app.get('/api/todos/:todoId', todosController.retrieve);
  // Edit a todo
  app.put('/api/todos/:todoId', todosController.update);
  // Delete a todo
  app.delete('/api/todos/:todoId', todosController.destroy);

  // Post a todo item related to do
  app.post('/api/todos/:todoId/items', todoItemsController.create);
};