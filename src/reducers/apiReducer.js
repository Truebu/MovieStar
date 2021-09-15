import { types } from "../types/types";

export const apiReducer = (state = {}, action) => {

  switch (action.type) {
    case types.apiHome:
      return {
        
      }

/*  case types.apiHome:
      return {

      }

    case types.apiHome:
      return {

      }
*/
  
    default:
      return state
  }

}
