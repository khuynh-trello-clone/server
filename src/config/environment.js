import 'dotenv/config'

export const env = {
  AUTHOR: process.env.AUTHOR,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  BUILD_MODE: process.env.BUILD_MODE
}
