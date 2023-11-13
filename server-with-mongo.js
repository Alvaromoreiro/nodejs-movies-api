import { MovieModel } from './models/mongodb/movie.js'
import { createApp } from './app.js'

createApp({ movieModel: MovieModel })
