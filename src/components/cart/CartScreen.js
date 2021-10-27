import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartClean } from '../../actions/cart'
import { buyAllMoviesWithFirebase } from '../../actions/movie'

import { useHistory } from 'react-router-dom';

import { MovieCartItem } from './MovieCartItem'

export const CartScreen = () => {
  
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()
  const {loading} = useSelector(state => state.ui)
  
  useEffect(() => {
    
  },[])

  const handleBuyAllMovies = () => {
    dispatch(buyAllMoviesWithFirebase())
    dispatch(cartClean())
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
            onClick={handleBuyAllMovies} // add confirm purchased and validation when cart.lenght === 0 || Also iniciar carga
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
