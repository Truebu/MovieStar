import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MovieItem } from './MovieItem';

export const MovieScreen = (movie) => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <MovieItem />
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            <Card.Body>
              <Card.Title><b>{movie.original_title}</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
