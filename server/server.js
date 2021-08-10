//https://youtu.be/ZwFA3YMfkoc?t=4150
//https://youtu.be/tBr-PybP_9c?t=2092
//https://youtu.be/tBr-PybP_9c?t=897
import express from 'express'
import { Server, Socket } from 'socket.io'
import http from 'http'
import { router } from './router.js'
import { addUser, getUser, removeUser } from './users.js'

const app = express()
app.use(router)
const server = http.createServer(app)
const corsOptions = {
  cors: true,
  origins: ['http://localhost:3000'],
}
const io = new Server(server, corsOptions)

const PORT = process.env.PORT || 5000

app.use(router)

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })

    if (error) return callback(error)

    socket.join(user.room)

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to room ${user.room}.`,
    })
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has joined!` })

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    })

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', {
        user: 'Admin',
        text: `${user.name} has left.`,
      })
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      })
    }
  })
})

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))
