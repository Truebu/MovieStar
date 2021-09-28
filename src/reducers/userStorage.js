import { types } from "../types/types"

const initialState = {
  myMovies: []
}

export const userStorageReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.cartBuyAllMovies:
      return {}

    case types.cartBuyMovie:
      return {}
    
    case types.buyMovie:
      return {
        ...state,
        myMovies: [...state.myMovies, action.payload]
      }

    default:
      return state
  }
}
