import React from 'react'
import { useDispatch } from 'react-redux'
import { buyMovieThroughCart } from '../../actions/cart'
import { buyMoviesWithFirebase } from '../../actions/movie'

export const MovieCartItem = ({movie: {
    id,
    overview,
    popularity,
    average,
    title,
    imgPath,
    date
  },
  isBought}) => {

  const flim = {
    id,
    overview,
    popularity,
    average,
    title,
    imgPath,
    date,
  }
  const dispatch = useDispatch()

  const handleBuyMovie = () => {
    dispatch(buyMoviesWithFirebase(flim))
    dispatch(buyMovieThroughCart(flim.id))
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
            onClick={handleBuyMovie}
          >
            Buy
          </button>
        }
      </div>
    </>
  )
}
