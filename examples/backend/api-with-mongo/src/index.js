const server = require('./app')

const PORT = process.env.PORT || 8080

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`App running in http://localhost:${PORT}`);
  })
}

setImmediate(startServer)

module.exports = server