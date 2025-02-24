import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({
      message: 'Welcome to the boards route from controller'
    })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}
