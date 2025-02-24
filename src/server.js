import express from 'express'
import { CLOSE_DB, CONNECT_DB } from './config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from './config/environment'
import { APIs_V1 } from './routes/v1'

const START_SERVER = () => {
  const app = express()

  const hostname = env.APP_HOST
  const port = env.APP_PORT

  app.use('/v1', APIs_V1)

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello human, I am running at ${hostname}:${port}/`)
  })

  exitHook(() => {
    console.log('Server is shutting down because of signal')
    CLOSE_DB()
    console.log('MongoDB Cloud Atlas connection is closed by exitHook!')
  })
}

// new way
;(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas!')

    // Start server after connected to MongoDB
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// old way

// CONNECT_DB()
//   .then(() => {
//     console.log('Connected to MongoDB Cloud Atlas!')
//   })
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })
