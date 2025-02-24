import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Welcome to the boards route' })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message: 'Board created' })
  })

export const boardRoutes = Router
