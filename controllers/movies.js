import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  // el constructor nos permite instanciar la clase
  // con la configuración/modelo necesaria
  // se usa la destructuración para poder pasarle más propiedades si fuera necesario
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  // si el metodo fuera estatico como en la clase-4
  // indica que el metodo pertenece a la clase en vez de a una instancia de la misma
  // en este caso vamos a hacer que podamos instanciar multiples MovieController
  // para instanciarlos con un constructor que llevará el MovieModel
  getAll = async (req, res) => {
    const { genre } = req.query
    const movies = await this.movieModel.getAll({ genre })
    res.json(movies)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const movie = await this.movieModel.getById({ id })
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }

  create = async (req, res) => {
    const result = validateMovie(req.body)

    if (result.error) return res.status(400).json({ message: JSON.parse(result.error.message) })

    const newMovie = await this.movieModel.create({ input: result.data })

    res.status(201).json(newMovie)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.movieModel.delete({ id })

    if (result) {
      return res.json({ message: 'Movie deleted' })
    }
    return res.status(404).json({ message: 'Movie not found' })
  }

  update = async (req, res) => {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const updatedMovie = await this.movieModel.update({ id, input: result.data })

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    res.json(updatedMovie)
  }
}
