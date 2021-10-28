import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartClean } from '../../actions/cart'
import { buyAllMoviesWithFirebase } from '../../actions/movie'

import { useHistory } from 'react-router-dom';

import { MovieCartItem } from './MovieCartItem'
import Swal from 'sweetalert2'

export const CartScreen = () => {
  
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()
  const {loading} = useSelector(state => state.ui)
  
  useEffect(() => {
    
  },[])

  const handleBuyAllMovies = () => {
    Swal.fire({// Posible Refactorizacion
      title: '¿Quieres comprar todo tu carrito?',
      text: "Estas apunto de comprar todas tus peliculas",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Las quiero!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(buyAllMoviesWithFirebase())
        dispatch(cartClean())
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Compradas',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/private/userMovies')
      }
    })
  }

  if (loading) {
    return <div className="lds-hourglass"></div>
  }

  return (
    <div className="cart_container">
    <Container>
      <Row>
        <Col>
          <h1 className="pt-5">
            Your Cart
          </h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <button
            className="btn btn-primary"
            onClick={ () => history.push('/private/home')}
          >
            Home
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-primary"
            onClick={ () => history.push('/private/userMovies')}
          >
            Your Movies
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-success"
            onClick={handleBuyAllMovies}
            disabled = {(cart.length < 2) ?true :false}
          >
            Buy All
          </button>
        </Col>
      </Row>
      <hr />      
      <div className="cart_movieItem">
        {
          cart?.map(movie => (
            <MovieCartItem
              key={movie.id}
              movie = {movie}
            />
          ))
        }
      </div>
    </Container>
    </div>
  )
}
