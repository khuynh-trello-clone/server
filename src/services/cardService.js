import { cardModel } from '~/models/cardModel'

const createNew = async reqBody => {
  try {
    const newCard = {
      ...reqBody
    }

    const createdCard = await cardModel.createNew(newCard)

    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    // always return in service
    return getNewCard
  } catch (error) {
    throw new Error(error)
  }
}

export const cardService = {
  createNew
}
