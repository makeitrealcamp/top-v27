import express, { Express } from 'express'
import configExpress from './config/express'
import routes from './routes'
import nodemailer from 'nodemailer'

const app: Express = express()
const port = process.env.PORT || 8080

//config
configExpress(app)

//Setup config
routes(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port} !!!`)
})