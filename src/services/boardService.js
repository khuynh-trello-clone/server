import { slugify } from '~/utils/formatters'

const createNew = async reqBody => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // always return in service
    return newBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew
}
