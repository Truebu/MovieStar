import React from 'react'
import { useDispatch } from 'react-redux'
import { buyMovieThroughCart } from '../../actions/cart'
import { buyMovie } from '../../actions/movie'

export const MovieCartItem = ({
  id,
  overview,
  popularity,
  vote_average,
  title,
  imgPath,
  release_date
  }) => {
  //

  const movie = {
    id,
    overview,
    popularity,
    vote_average,
    title,
    imgPath,
    release_date
  }
  const dispatch = useDispatch()

  const handleBuyMovie = () => {
    dispatch(buyMovieThroughCart(movie.id))
    dispatch(buyMovie(movie))
  }

  return (
    <>
      <div className="cart_movie">
        <div>
          <img
            className="cart_image"
            src={`https://image.tmdb.org/t/p/w500${movie.imgPath}`}
            alt={movie.title}
          />
        </div>
        <div>
          {movie.title}
        </div>
        <button
          className="btn btn-success"
          onClick={handleBuyMovie} // agregar una ventana de confirmacion
        >
          Buy
        </button>
      </div>
    </>
  )
}
