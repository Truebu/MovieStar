import { types } from "../types/types";

const initialState = {
  data: []
}

export const apiReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.api:
      return {
        ...state,
        data: action.payload
      }
    case types.apiReload:
      return {
        data: []
      }

    default:
      return state
  }

}
