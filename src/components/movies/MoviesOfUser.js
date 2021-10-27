import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { MoviePurchased } from '../user_storage/MoviesPurchased'

export const MoviesOfUser = () => {

  const {myMovies} = useSelector(state => state.movies)
  const history = useHistory()

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
            onClick={ () => history.push('/private/cart')}
          >
            Your Cart
          </button>
        </Col>
      </Row>
      <hr />
      <div className="moviesUser_movieItem">
        {
          myMovies.map(movie => (
            <MoviePurchased
              key = {movie.id}
              movie = {movie}
            />
          ))
        }
      </div>
    </Container>
    </div>
  )
}
