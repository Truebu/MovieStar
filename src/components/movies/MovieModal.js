import React, { useEffect, useRef, useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMovieToCart } from "../../actions/cart";
import { buyMovie, inactiveMovie } from "../../actions/movie";
import { uiCloseModal } from "../../actions/ui";
import { findElementInArray } from "../../helpers/findElementInArray";
import { firebase } from '../../firebase/firebase-config'
import { toast } from "../../features/swalMixings";

export const MovieModal = () => {
  const dispatch = useDispatch()
  const {modalOpen} = useSelector(state => state.uiModal)
  const movie = useSelector(state => state.activeMovie)
  const {cart} = useSelector(state => state.cart)
  const {myMovies} = useSelector(state => state.movies)
  const history = useHistory()
  
  const [logged, setLogged] = useState(false)
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  },[])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (isMounted.current) {        
        if (user?.uid) {
          setLogged(true)
        } else {
          setLogged(false)
        }
      }
    })
  }, [setLogged])

  const handleCloseModal = () => {
    dispatch( uiCloseModal() )
    dispatch( inactiveMovie() )
  }

  const findElementInCart = findElementInArray(cart, movie.id)
  const handleAddMovieCart = () => {
    // TODO: compareTwoArrays() @cart @storageUser
    if (logged) {
      if(findElementInCart){
        toast.fire({
          icon: 'warning',
          title: 'Ya esta en tu Carrito!'
        })
      } else {
        dispatch(addMovieToCart(movie))
        handleCloseModal()
      }
    } else {
      dispatch(uiCloseModal())
      history.replace('/public/auth/login')
    }
  }

  // TODO: terminar ahora con la compra
  const findElementInPurchasing = findElementInArray(myMovies, movie.id)
  const handleBuyMovie = () => {
    if (logged) {
      if(findElementInPurchasing){
        toast.fire({
          icon: 'warning',
          title: 'Ya la compraste'
        })
      } else {
        dispatch(buyMovie(movie))
        handleCloseModal()
      }
    } else {
      dispatch(uiCloseModal())
      history.replace('/public/auth/login')
    }
  }


  return (
    <>
      <Modal show={modalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title} - </Modal.Title>
          <Modal.Title> Popularidad: - {movie.average}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{movie.overview}</Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w500${movie.imgPath}`} alt={movie.title}/>
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
              onClick={ handleBuyMovie }
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
