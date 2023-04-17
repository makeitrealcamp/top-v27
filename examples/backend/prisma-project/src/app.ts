import express, { Express } from 'express'
import configExpress from './config/express'
import routes from './routes'
import { formData } from './middlewares/formData'

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

app.listen(port, () => {
  console.log(`Server is running on port ${port} !!!`)
})