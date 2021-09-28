import { types } from "../types/types"

const initialState = {
  cart: []
}

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.cartAddMovie:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case types.cartBuyAllMovies:
      return initialState
    
    case types.cartClean:
      return initialState

    default:
      return state
  }
}