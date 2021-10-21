import React, { useEffect, useRef, useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMovieCartWithFirebase} from "../../actions/cart";
import { buyMoviesWithFirebase, inactiveMovie } from "../../actions/movie";
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

  const handleMovie = ({target:{name}}) => {
    const movieInCart = findElementInArray(cart, myMovies, movie, logged, name)    
    switch (movieInCart) {
      case 'bad login':
        dispatch(uiCloseModal())
        history.replace('/public/auth/login')
        break;      
      case 'enabled cart':
        dispatch(addMovieCartWithFirebase(movie))
        handleCloseModal()
        break;
      case 'enabled buy':
        dispatch(buyMoviesWithFirebase(movie))
        handleCloseModal()
        break;
      default:
        break;
    }
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
              name="cart"
              onClick={handleMovie}
            >
              Add to Cart
            </Button>
            <Button
              variant="primary"
              name= "buy"
              onClick={ handleMovie } // Notification to Client about buy (Swal)
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
