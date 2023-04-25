const router = require('express').Router()
const todoController = require('./todo.controller')

router.route('/').post(todoController.createTodo)

module.exports = router