import React from 'react';

export const MovieScreen = ({
  poster_path,
  id,
  title,
  overview,
  release_date
}) => {
  
  return (
    <div>
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
