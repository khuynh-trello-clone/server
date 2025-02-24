import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoute'
import { columnRoutes } from './columnRoute'
import { cardRoutes } from './cardRoute'

const Router = express.Router()

// Health check v1/status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'API is working' })
})

// Board APIs
Router.use('/boards', boardRoutes)

// Column APIs
Router.use('/columns', columnRoutes)

// Card APIs
Router.use('/cards', cardRoutes)

export const APIs_V1 = Router
