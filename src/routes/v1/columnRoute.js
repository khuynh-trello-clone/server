import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { columnController } from '~/controllers/columnController'
import { columnValidation } from '~/validations/columnValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Welcome to the columns route' })
  })
  .post(columnValidation.createNew, columnController.createNew)

// Router.route('/:id').get(columnController.getDetails)
// .put(columnController.update)
// .delete(columnController.delete)

export const columnRoutes = Router
