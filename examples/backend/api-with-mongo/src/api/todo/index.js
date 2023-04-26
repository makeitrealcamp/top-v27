const router = require('express').Router()
const todoController = require('./todo.controller')

router.route('/').get(todoController.listTodos)
router.route('/:todoId').get(todoController.showTodo)
router.route('/').post(todoController.createTodo)
router.route('/:todoId').put(todoController.updateTodo)
router.route('/:todoId').delete(todoController.deleteTodo)

module.exports = router