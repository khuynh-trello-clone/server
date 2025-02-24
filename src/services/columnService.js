import { columnModel } from '~/models/columnModel'

const createNew = async reqBody => {
  try {
    const newColumn = {
      ...reqBody
    }

    const createdColumn = await columnModel.createNew(newColumn)

    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    // always return in service
    return getNewColumn
  } catch (error) {
    throw new Error(error)
  }
}

export const columnService = {
  createNew
}
