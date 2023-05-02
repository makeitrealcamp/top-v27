require('dotenv').config()
const express = require('express')
const {connect} = require('./config/database')
const configExpress = require('./config/express')
const routes = require('./routes')
const swaggerDocs = require('./config/swagger')

const app = express()
connect()

// setup express
configExpress(app)
// routes
routes(app)
// swagger
swaggerDocs(app, process.env.PORT)

module.exports = app