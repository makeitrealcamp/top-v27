import { Application } from "express";

import healthcheck from './api/healthcheck'
import product from './api/product'
import review from './api/review'
import user from './api/user'

const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/products', product)
  app.use('/api/reviews', review)
  app.use('/api/users', user)
}

export default routes