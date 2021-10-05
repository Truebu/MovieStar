import React from 'react'

export const MovieCartItem = ({
  id,
  overview,
  popularity,
  vote_average,
  title,
  imgPath,
  release_date
  }) => {
  
  return (
    <>
      <div className="cart_movie">
        <div>
          <img
          className="cart_image"
            src={`https://image.tmdb.org/t/p/w500${imgPath}`}
            alt={title}            
          />
        </div>
        <div>
          {title}
        </div>
        <button className="btn btn-success">
          Buy
        </button>
      </div>
    </>
  )
}
