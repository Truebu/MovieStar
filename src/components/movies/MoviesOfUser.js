import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { MovieCartItem } from '../cart/MovieCartItem'

export const MoviesOfUser = () => {

  const {myMovies} = useSelector(state => state.movies)
  console.log(myMovies)
  return (
    <div className="cart_container">
    <Container>
      <Row>
        <Col>
          <h1 className="pt-5">
            Your Movies
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
            Your Cart
          </button>
        </Col>
      </Row>
      <hr />      
      <div className="moviesUser_movieItem">
        {
          myMovies?.map(movie => (
            <MovieCartItem
              key = {movie?.imgPath}
              movie = {movie}
            />
          ))
        }
      </div>
    </Container>
    </div>
  )
}
