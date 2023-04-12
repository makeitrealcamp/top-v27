import { Application } from "express";

import healthcheck from './api/healthcheck'
import product from './api/product'
import review from './api/review'
import user from './api/user'
import authLocal from './auth/local'

const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/products', product)
  app.use('/api/reviews', review)
  app.use('/api/users', user)

  // auth routes
  app.use('/auth/local', authLocal)
  // app.use('/auth/google', authGoogle)
  // app.use('/auth/facebook', authFacebook)
  // app.use('/auth/github', authGithub)
}

export default routes