import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import ApiError from '~/utils/ApiError'
import { BOARD_TYPES } from '~/utils/constants'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const createNew = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(30).trim().strict(),
    description: Joi.string().required().min(3).max(30).trim().strict(),
    type: Joi.string().required().valid(BOARD_TYPES.PUBLIC, BOARD_TYPES.PRIVATE)
  })

  try {
    await schema.validateAsync(req.body, {
      // abortEarly: false in order to show all errors
      abortEarly: false
    })

    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage
    )

    next(customError)
  }
}

const update = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(30).trim().strict(),
    description: Joi.string().min(3).max(30).trim().strict(),
    type: Joi.string().valid(BOARD_TYPES.PUBLIC, BOARD_TYPES.PRIVATE),
    columnOrderIds: Joi.array().items(
      Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
    )
  })

  try {
    await schema.validateAsync(req.body, {
      // abortEarly: false in order to show all errors
      abortEarly: false,
      allowUnknown: true
    })

    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage
    )

    next(customError)
  }
}

export const boardValidation = {
  createNew,
  update
}
