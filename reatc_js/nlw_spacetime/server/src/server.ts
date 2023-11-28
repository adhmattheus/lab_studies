import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'
import multipart from '@fastify/multipart'
import { authRoutes } from './routes/auth'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastify from 'fastify'
import 'dotenv/config'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads/',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP server running 🚀 on http://localhost:3333")
})