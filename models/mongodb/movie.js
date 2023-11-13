import { MongoClient, ServerApiVersion } from 'mongodb'
import { randomUUID } from 'crypto'
import 'dotenv/config.js'

const uri = `mongodb+srv://Administrador:${process.env.MONGODB_PASSWORD}@cluster0.kckfmqc.mongodb.net/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function connect () {
  try {
    await client.connect()
    const database = client.db('movies')
    return database.collection('movies')
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
    await client.close()
  }
}

export class MovieModel {
  static async getAll ({ genre }) {
    const movies = await connect()

    if (genre) {
      return movies.find({
        genre: {
          $elemMatch: {
            $regex: genre,
            $options: 'i'
          }
        }
      }).toArray()
    }
    return movies.find({}).toArray()
  }

  static async getById ({ id }) {
    const movies = await connect()

    return movies.findOne({ id })
  }

  static async create ({ input }) {
    const db = await connect()

    const { insertedId } = await db.insertOne(input)

    return {
      id: insertedId,
      ...input
    }
  }

  static async delete ({ id }) {
    const db = await connect()
    const { deletedCount } = await db.deleteOne({ id })
    return deletedCount > 0
  }

  static async update ({ id, input }) {
    const db = await connect()

    const { ok, value } = await db.findOneAndUpdate({ id }, { $set: input }, { returnNewDocument: true })

    if (!ok) return false

    return value
  }
}
