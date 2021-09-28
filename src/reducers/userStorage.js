import { types } from "../types/types"

const initialState = {
  movies: []
}

export const userStorageReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.cartBuyAllMovies:
      return {}

    case types.cartBuyMovie:
      return {}
    
    case types.buyMovie:
      return {}

    default:
      return state
  }
}
