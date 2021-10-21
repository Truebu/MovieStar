import { db } from '../firebase/firebase-config';
import { loadMovies } from '../helpers/loadMovies';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import {buyMovieThroughCart} from './cart';

export const movieActive = (movieInfo) => ({
  type: types.activeMovie,
  payload: {
    id: movieInfo.id,
    overview: movieInfo.overview,
    popularity: movieInfo.popularity,
    average: movieInfo.vote_average,
    title: movieInfo.title,
    imgPath: movieInfo.poster_path,
    date: movieInfo.release_date
  }
})

export const buyAllMoviesWithFirebase = () => {
  return async (dispatch, getState) => {
    const {cart} = getState().cart;
    const {uid} = getState().auth;
    dispatch(buyAllMovies(cart));    
    await cart.map(e => (
      db.collection(`${uid}/peliculas`).add(e.movie)
    ));
  }
}

export const buyMoviesWithFirebase = (flim) => {
  return async (dispatch, getState) => {    
    dispatch(buyMovieThroughCart(flim.id))    
    dispatch(buyMovie(flim))
    const {uid} = getState().auth;
    await db.collection(`${uid}/user/peliculas`).add(flim)
    await db.doc(`${uid}/user/cart/${flim.id}`).delete()
  }
}

export const getMovies = (uid) => {
  return async (dispatch) => {
    startLoading()
    const movies = await loadMovies('peliculas', uid);    
    dispatch(buyAllMovies(movies))
    finishLoading()
  }
}

export const inactiveMovie = () => ({
  type: types.inactiveMovie
})

const buyMovie = (movie) => ({
  type: types.buyMovie,
  payload: movie
})
  
const buyAllMovies = (movies) => ({
  type: types.buyAllMovies,
  payload: movies
})
