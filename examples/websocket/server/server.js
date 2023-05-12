const express = require('express')
const SocketIO = require('socket.io')
const http = require('http')

const port = 8080
const app = express()
const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: 'http://localhost:5173',
    method: ['POST', 'GET']
  }
})

io.on('connection', (socket) => {
  console.log('new connection');

  socket.emit('welcome', { message: 'Hola Mundo!' })

  socket.on('message', (data) => {
    //console.log('MESSAGE:', data);
    io.emit('broadcast', data)
  })
  
  socket.on('join room', () => {
    console.log('Nuevo usuario en la sala');
    socket.join('some room')
  })
  
  socket.on('msgPrivate', (data) => {
    io.to('some room').emit('private', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
  
})

server.listen(port, () => {
  console.log('Server ok');
})