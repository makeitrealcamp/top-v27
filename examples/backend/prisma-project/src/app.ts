import express, { Express } from 'express'
import configExpress from './config/express'
import routes from './routes'
import nodemailer from 'nodemailer'

const app: Express = express()
const port = process.env.PORT || 8080

const send = async () => {

  const count = await nodemailer.createTestAccount()

  //pepito@ethereal.com
  //teset1234

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: count.user,
      pass: count.pass
    }
  })

  // const verify = async (transporter: any) => {
  //   const connection = await transporter.verify()

  //   if(connection) {
  //     console.log('Server is ready to take out message');
      
  //   }
  // } 

  // verify(transporter)

  const user = { email: 'sergio.jaramillo@makeitreal.camp', name: 'Nicolas Rodriguez' }

  const preview = await transporter.sendMail({
    from: '<admin@hotelbooking.com>',
    to: user.email,
    subject: 'Welcome',
    html: `<h1> Bienvenido ${user.name} gracias por registrarte</h1>`,
    text: `Bienvenido ${user.name} gracias por registrarte`
  })

  console.log("Message sent: %s", preview.messageId)
  console.log(nodemailer.getTestMessageUrl(preview));
}

send().catch(console.error);



//config
configExpress(app)

//Setup config
routes(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port} !!!`)
})