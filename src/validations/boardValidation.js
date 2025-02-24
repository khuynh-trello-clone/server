import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'

const createNew = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(30).trim().strict(),
    description: Joi.string().required().min(3).max(30).trim().strict()
  })

  try {
    await schema.validateAsync(req.body, {
      // abortEarly: false in order to show all errors
      abortEarly: false
    })

    next()
  } catch (error) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}
