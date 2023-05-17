require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const sgMail = require('@sendgrid/mail');

const app = express()
const port = 8080

const sendMailSendGrid = (data) => {
  const apiKey = process.env.SENDGRID_API_KEY
  sgMail.setApiKey(apiKey)

  return sgMail.send(data)
}

// config
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.post('/', async (req, res) => {
  const { firstname, lastname, email } = req.body

  const msg = {
    to: email,
    from: `'No reply💻' <sergio.jaramillo@makeitreal.camp>`,
    subject: 'Bienvenido',
    templateId: 'd-20f39044f5ad4363a806030658b00ce9',
    dynamic_template_data: {
      firstname,
      lastname,
      redirectUrl: 'https://makeitreal.camp/'
    } 
  }

  await sendMailSendGrid(msg)

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server runnin in http://localhost:${port}`);
})