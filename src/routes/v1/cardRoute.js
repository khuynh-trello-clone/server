import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { cardController } from '~/controllers/cardController'
import { cardValidation } from '~/validations/cardValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Welcome to the cards route' })
  })
  .post(cardValidation.createNew, cardController.createNew)

// Router.route('/:id').get(cardController.getDetails)
// .put(cardController.update)
// .delete(cardController.delete)

export const cardRoutes = Router
