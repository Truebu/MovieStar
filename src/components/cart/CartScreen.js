import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { MovieCartItem } from './MovieCartItem'

export const CartScreen = () => {

  const {cart} = useSelector(state => state.cart)

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
          <button className="btn btn-success">
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
              {...movie.movie}
            />
          ))
        }
      </div>
    </Container>
    </div>
  )
}
