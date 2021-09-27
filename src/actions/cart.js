import { types } from "../types/types";


export const addMovieToCart = (movie) => ({
  type: types.cartAddMovie,
  payload: movie
})



