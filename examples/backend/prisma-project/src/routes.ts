import { Application } from "express";

import healthcheck from './api/healthcheck'

const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
}

export default routes