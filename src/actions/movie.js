import { db } from '../firebase/firebase-config';
import { loadMovies } from '../helpers/loadMovies';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import {buyMovieThroughCart} from './cart';
import { firebaseQueris } from "../helpers/fireBaseQuerys";

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
  return async (dispatch, getState) => {// Start Loading
    const {cart} = getState().cart;
    const {uid} = getState().auth;
    const idCarts = []
    cart.forEach(e => {
      idCarts.push(e.id)
    })
    dispatch(buyAllMovies(cart));
    await cart.forEach((movie) => (
      db.collection(`${uid}/user/peliculas`).add(movie)
    ));
    const docsId = await firebaseQueris(uid, 'cart', idCarts);
    docsId.map( (e) => (
      db.collection(`${uid}/user/cart`).doc(`${e}`).delete().then(()=>{
        console.log('eliminado'); // FinishLoading (Alerta de compradas!)
      })
    ));
  }
}

export const buyMoviesWithFirebase = (flim) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    const docId = await firebaseQueris(uid, 'cart', [flim.id]);
    dispatch(buyMovie(flim))
    if (!(docId[0] === '')) {
      dispatch(buyMovieThroughCart(flim.id))
      db.collection(`${uid}/user/cart`).doc(`${docId[0]}`).delete().then(()=>{
        console.log('eliminado');
      })
    }
    await db.collection(`${uid}/user/peliculas`).add(flim);
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
