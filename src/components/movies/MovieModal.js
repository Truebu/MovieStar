import React, { useEffect, useRef, useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMovieToCart, buyMovieThroughCart } from "../../actions/cart";
import { buyMovie, inactiveMovie } from "../../actions/movie";
import { uiCloseModal } from "../../actions/ui";
import { findElementInArray } from "../../helpers/findElementInArray";


export const MovieModal = () => {
  const dispatch = useDispatch()
  const {modalOpen} = useSelector(state => state.uiModal)
  const {uid} = useSelector(state => state.auth)
  const movie = useSelector(state => state.activeMovie)
  const {cart} = useSelector(state => state.cart)
  const {myMovies} = useSelector(state => state.movies)
  const history = useHistory()
  
  const [logged, setLogged] = useState(false)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted.current) {
      if (uid) {
        setLogged(true)
      } else {
        setLogged(false)
      }
    }
    return () => {
      isMounted.current = false
    }
  },[uid])

  const handleCloseModal = () => {
    dispatch( uiCloseModal() )
    dispatch( inactiveMovie() )
  }

  const handleAddMovieCart = (e) => {// hacer metodo por el target de los botones
    const movieInCart = findElementInArray(cart, movie?.id, logged)

  }

  const handleBuyMovie = () => {
    
  }


  return (
    <>
      <Modal show={modalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title} - </Modal.Title>
          <Modal.Title> Popularidad: - {movie.average}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {movie.overview}
          </div>
          <div>
            <img // Configure Styles
              src={`https://image.tmdb.org/t/p/w500${movie.imgPath}`} alt={movie.title}              
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {movie.date}
            <Button
              variant="primary"
              onClick={handleAddMovieCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="primary"
              onClick={ handleBuyMovie } // Notification to Client about buy (Swal)
            >
              Buy
            </Button>
          <Button
            variant="secondary"
            onClick={ handleCloseModal }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
