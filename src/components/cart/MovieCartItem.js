import React from 'react'
import { useDispatch } from 'react-redux'
import { buyMovieThroughCart } from '../../actions/cart'
import { buyMovie } from '../../actions/movie'

export const MovieCartItem = ({
  movie: {
    id,
    overview,
    popularity,
    vote_average,
    title,
    imgPath,
    release_date
  },
  isBought}) => {
  
  
  const flim = {
    id,
    overview,
    popularity,
    vote_average,
    title,
    imgPath,
    release_date,
  }
  const dispatch = useDispatch()

  const handleBuyMovie = () => {
    dispatch(buyMovieThroughCart(flim.id))
    dispatch(buyMovie(flim))
  }

  return (
    <>
      <div className="cart_movie">
        <div>
          <img
            className="cart_image"
            src={`https://image.tmdb.org/t/p/w500${flim.imgPath}`}
            alt={flim.title}
          />
        </div>
        <div>
          {flim.title}
        </div>
        {
          isBought || 
          <button
            className="btn btn-success"
            onClick={handleBuyMovie} // agregar una ventana de confirmacion
          >
            Buy
          </button>
        }
      </div>
    </>
  )
}
