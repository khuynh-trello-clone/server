import { boardModel } from '~/models/boardModel'
import { slugify } from '~/utils/formatters'

const createNew = async reqBody => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    const createdBoard = await boardModel.createNew(newBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)

    // always return in service
    return getNewBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew
}
