import { types } from "../types/types"

const initialState = {
  myMovies: []
}

export const userStorageReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case types.buyMovie:
      return {
        ...state,
        myMovies: [...state.myMovies, action.payload]
      }
    
    case types.buyAllMovies:
      return {

      }
    
    default:
      return state
  }
}
