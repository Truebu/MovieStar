import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { MovieCartItem } from './MovieCartItem'

export const CartScreen = () => {

  const {cart} = useSelector(state => state.cart)

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Your Cart
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>Back</Col>
        <Col>Your Movies</Col>
        <Col>Buy All</Col>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col>fdsa</Col>
            <Col>fdsafds</Col>
          </Row>
          <Row>
            <div>
              {
                cart?.map(movie => (
                  <MovieCartItem
                    key={movie.id}
                    {...movie}
                  />
                ))
              }              
            </div>
          </Row>
        </Container>
      </Row>
    </Container>
  )
}
