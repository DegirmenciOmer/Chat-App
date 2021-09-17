import express from 'express'
import { PORT } from './server.js'

export const router = express.Router()

router.get('/', (req, res) => {
  res.send(`Server is up and running on ${PORT}`)
})
