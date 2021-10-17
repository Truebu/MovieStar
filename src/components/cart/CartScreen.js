import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartClean } from '../../actions/cart'
import { buyAllMoviesWithFirebase } from '../../actions/movie'

import { MovieCartItem } from './MovieCartItem'

export const CartScreen = () => {
  
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  useEffect(() => {
    
  },[])

  const handleBuyAllMovies = () => {
    for (let i = 0; i < cart.length; i++) {
      cart[i].isBought = true;      
    }
    dispatch(buyAllMoviesWithFirebase())    
    dispatch(cartClean())
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
          <button className="btn btn-primary">
            Regresar
          </button>
        </Col>
        <Col>
          <button className="btn btn-primary">
            Your Movies
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-success"
            onClick={handleBuyAllMovies} // add confirm purchased and validation when cart.lenght === 0
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
              key={movie.movie.id}
              {...movie}              
            />
          ))
        }
      </div>
    </Container>
    </div>
  )
}
