import { types } from "../types/types"


export const activeMovieReducer = (state, action) => {

  switch (action.type) {
    case types.activeMovie:
      return {
        ...state,
        id: action.payload.id,
        overview: action.payload.overview,
        popularity: action.payload.popularity,
        average: action.payload.average,
        title: action.payload.title,
        imgPath: action.payload.imgPath,
        date: action.payload.date,
      }
    case types.inactiveMovie:
      return {}

    default:
      return {}
  }
}

