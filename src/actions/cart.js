import { types } from "../types/types";


export const addMovieToCart = (movie) => ({
  type: types.cartAddMovie,
  payload: movie

})

// TODO: This function need, id of the movie
export const buyMovieThroughCart = (movieId) => ({
  type: types.buyMovieThroughCart,
  payload: movieId
})

export const cartClean = () => ({
  type: types.cartClean
})


