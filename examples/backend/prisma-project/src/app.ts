import express, { Express } from 'express'
import configExpress from './config/express'
import routes from './routes'
import { formData } from './middlewares/formData'
import { clientRedis } from './config/redis'

const app: Express = express()
const port = process.env.PORT || 8080

//config
configExpress(app)

//Setup config
routes(app)

app.post('/test-formdata', formData,(req, res) => {
  console.log('Este es el nuevo body:', req.body);
  res.status(200).json({...req.body})
})

app.listen(port, async () => {
  clientRedis.on('error', (err) => console.log('Redis client error', err))

  await clientRedis.connect()
  console.log(`Server is running on port ${port} !!!`)
})