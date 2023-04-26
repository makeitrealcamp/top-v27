const todo = require('./api/todo')
const user = require('./api/user')

const routes = (app) => {
  app.use('/api/todos', todo)
  app.use('/api/users', user)
}

module.exports = routes