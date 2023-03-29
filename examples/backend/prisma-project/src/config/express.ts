import express, { Application, urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'

const configExpress = (app: Application): void => {
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
}

export default configExpress