import { types } from "../types/types";



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
