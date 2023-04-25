const express = require('express')
const connect = require('./config/database')
const configExpress = require('./config/express')
const routes = require('./routes')

const app = express()
connect()

// setup express
configExpress(app)
//routes
routes(app)

module.exports = app