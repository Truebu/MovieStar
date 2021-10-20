import { db } from '../firebase/firebase-config';
import { loadMovies } from '../helpers/loadMovies';
import { types } from '../types/types';

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
    cart.map(e => e.movie.isBought = true)
    await cart.map(e => (
      db.collection(`/usuarios/${uid}/peliculas`).add(e.movie)
    ));
  }
}

export const buyMoviesWithFirebase = (flim) => {
  return async (dispatch, getState) => {    
    const {uid} = getState().auth;
    await db.collection(`/usuarios/${uid}/peliculas/`).add(flim)
    dispatch(buyMovie(flim))
  }
}

export const getMovies = (uid) => {
  return async (dispatch) => {    
    const movies = await loadMovies('peliculas', uid);    
    dispatch(buyAllMovies(movies))    
  }
}

export const inactiveMovie = () => ({
  type: types.inactiveMovie
})

export const buyMovie = (movie) => ({
  type: types.buyMovie,
  payload: {
    movie,
    isBought: true
  }
})

export const buyAllMovies = (movies) => ({ // without Implement
  type: types.buyAllMovies,
  payload: movies
})
