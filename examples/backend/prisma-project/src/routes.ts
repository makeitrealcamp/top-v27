import { Application } from "express";

import healthcheck from './api/healthcheck'
import product from './api/product'

const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/products', product)
}

export default routes