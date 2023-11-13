import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createMovieRouter } from './routes/movies.js'
import logger from 'morgan'
import 'dotenv/config.js'

export const createApp = ({ movieModel }) => {
  const app = express()
  // Aplica un middleware para controlar CORS
  app.use(corsMiddleware())

  app.use(logger('dev'))

  // desabilita la cabecera que añade express por defecto
  app.disable('x-powered-by')

  // Aplica un middleware para controlar la cabecera Content-Type
  app.use(json())

  const PORT = process.env.PORT ?? 8080

  app.use('/movies', createMovieRouter({ movieModel }))

  app.listen(PORT, () => {
    console.log(`Welcome! App listening on port: ${PORT}`)
  })
}
