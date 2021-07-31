//https://youtu.be/ZwFA3YMfkoc?t=3112
import express from 'express'
import { Server, Socket } from 'socket.io'
import http from 'http'
import { router } from './router.js'
import { disconnect } from 'process'

const app = express()
const server = http.createServer(app)
const corsOptions = {
  cors: true,
  origins: ['http://localhost:3000'],
}
const io = new Server(server, corsOptions)

const PORT = process.env.PORT || 5000

io.on('connection', (socket) => {
  console.log('We have a new connection!!!')
  socket.on('disconnect', () => console.log('User has left!!!'))
})

app.use(router)

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))
