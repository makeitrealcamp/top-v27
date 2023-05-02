const mongoose = require('mongoose')

let connection

const connect = async () => {
  if(connection) return

  const mongoUri = process.env.MONGO_DB_URI

  connection = mongoose.connection

  connection.once('open', () => {
    console.log('Connection with mongo OK');
  })

  connection.on('disconnected', () => {
    console.log('Disconneted successfull');
  })

  connection.on('error', (error) => {
    console.log('Something went wring', error);
  })

  await mongoose.connect(mongoUri)
}

const disconnected = async () => {
  if(!connection) return 

  await mongoose.disconnect()
}

const cleanup = async () => {
    for(const collection in connection.collections){
      await connection.collections[collection].deleteMany({})
    }
  }
  
  module.exports = { connect, disconnected, cleanup }
