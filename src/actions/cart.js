import { types } from "../types/types";
import { db } from '../firebase/firebase-config';
import { loadMovies } from "../helpers/loadMovies";

export const addMovieCartWithFirebase = (movie) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    dispatch(addMovieToCart(movie));
    await db.collection(`${uid}/user/cart/`).add(movie);
  }
}

export const getCart = (uid) => {
  return async (dispatch) => {
   const cart = await loadMovies('cart', uid);
   cart.map(e => (
     dispatch(addMovieToCart(e))
   ))
  }
}

const addMovieToCart = (movie) => ({
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


