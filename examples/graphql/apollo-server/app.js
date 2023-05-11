import express from 'express'
import http from 'http'
import dotenv from 'dotenv'

import connectDb from './config/database.js';
import configExpress from './config/express.js'
import graphqlConfig from './config/graphql.js'
import routesConfig from './routes.js'

dotenv.config()
export const app = express()
export const server = http.Server(app)

const main = async () => {
  await connectDb();
  await configExpress(app)
  const graphqlServer = await graphqlConfig(server)
  await routesConfig(app, graphqlServer)
}

main()