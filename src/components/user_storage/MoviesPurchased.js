import React from 'react'

export const MoviePurchased = ({movie}) => {

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
      </div>
    </>
  )
}