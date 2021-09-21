import React from 'react';
import { useDispatch } from 'react-redux';
import { movieActive } from '../../actions/movie';
import { uiOpenModal } from '../../actions/ui';

export const MovieScreen = ({
  id,
  overview,
  popularity,
  vote_average,
  title,
  poster_path,
  release_date
}) => {
  
  const dispatch = useDispatch()
  const movieInfo = {
    id,
    overview,
    popularity,
    vote_average,
    title,
    poster_path,
    release_date
  }
  const handleOpenMovie = () => {
    dispatch(uiOpenModal())
    dispatch(movieActive(movieInfo))
  }

  return (
    <div
      onClick={ handleOpenMovie }
    >
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
      <span>{release_date}</span>
    {/* <Container>
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <MovieItem />
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + poster_path} />
            <Card.Body>
              <Card.Title><b>{title}</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
    </div>
  )
}
