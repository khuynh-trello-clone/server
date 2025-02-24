import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoute'

const Router = express.Router()

// Health check v1/status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'API is working' })
})

// Board APIs
Router.use('/boards', boardRoutes)

export const APIs_V1 = Router
