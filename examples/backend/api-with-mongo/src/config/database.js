const mongoose = require('mongoose')

const connect = () => {
  const mongoUri = process.env.MONGO_DB_URI

  mongoose.connect(mongoUri)

  mongoose.connection.once('open', () => {
    console.log('Connection with mongo OK');
  })

  mongoose.connection.on('error', (error) => {
    console.log('Something went wring', error);
  })

  return mongoose.connection
}

module.exports = connect