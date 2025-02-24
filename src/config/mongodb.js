import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

const MONGODB_URI = env.MONGODB_URI
const DATABASE_NAME = env.DATABASE_NAME

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: false
  }
})

export const CONNECT_DB = async () => {
  // Connect to the database
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error('Must connect to the database first!')
  }
  return trelloDatabaseInstance
}
