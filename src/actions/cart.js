import { types } from "../types/types";


export const addMovieToCart = (movie) => ({
  type: types.cartAddMovie,
  payload: {
    movie,
    isBought: false
  }

})

// TODO: This function need, id of the movie
export const buyMovieThroughCart = () => ({

})

export const cartClean = () => ({
  type: types.cartClean
})


