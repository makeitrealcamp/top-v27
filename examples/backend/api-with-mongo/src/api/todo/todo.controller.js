const Todo = require('./todo.model')
const User = require('../user/user.model')

module.exports = {
  //POST
  async createTodo(req, res) {
    try {
      const data = req.body
      const { authorization } = req.headers
      const userId = authorization

      const user = await User.findById(userId)

      if(!user) {
        throw new Error('user not found')
      }

      const todo = await Todo.create({ ...data, user: userId })
      user.todos.unshift(todo)
      await user.save({ validateBeforeSave: false })
      

      res.status(201).json({ message: 'todo created', data: todo })
    } catch (error) {
      res.status(400).json({ message: 'todo could not created', data: error.message })
    }
  },

  //GET
  async listTodos(_, res) {
    try {
      const todos = await Todo.find()

      res.status(200).json({ message: 'todos found', data: todos })
    } catch (error) {
      res.status(400).json({ message: 'todos not found', data: error.message })
    }
  },

  //GET:id
  async showTodo(req, res) {
    try {

      const { todoId } = req.params
      const todo = await Todo.findById(todoId).populate({
        path: 'user',
        select: '-_id',
        // populate: {
        //   path: 'todos'
        // }
      })

      res.status(200).json({ message: 'todo found', data: todo })
    } catch (error) {
      res.status(400).json({ message: 'todo not found', data: error.message })
    }
  },

  //PUT
  async updateTodo(req, res) {
    try {
      const { todoId } = req.params
      const data = req. body

      const todo = await Todo.findByIdAndUpdate(todoId, data, { new: true })

      res.status(200).json({ message: 'todo updated', data: todo })
    } catch(error) {
      res.status(400).json({ message: 'todo could not updated', data: error.message })
    }
  },

  //DELETE
  async deleteTodo(req, res) {
    try {
      const { todoId } = req.params

      const todo = await Todo.findByIdAndDelete(todoId)

      res.status(200).json({ message: 'todo deleted', data: todo })
    } catch(error){
      res.status(400).json({ message: 'todo coult not deleted', data: error.message })
    }
  }

}