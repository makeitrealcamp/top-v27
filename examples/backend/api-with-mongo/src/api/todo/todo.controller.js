const Todo = require('./todo.model')

module.exports = {
  
  //POST
  async createTodo(req, res) {
    try {
      const data = req.body

      const todo = await Todo.create({ ...data })

      res.status(201).json({ message: 'todo created', data: todo })
    } catch (error) {
      res.status(400).json({ message: 'todo could not created', data: error })
    }
  }

}