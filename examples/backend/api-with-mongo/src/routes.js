const todo = require('./api/todo')

const routes = (app) => {
  app.use('/api/todo', todo)
}

module.exports = routes