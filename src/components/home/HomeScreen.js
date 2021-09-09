import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../images/image.png';

export const HomeScreen = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.cine-calidad.com/wp-content/uploads/2021/09/okLrhor4L4hyiDBQKb6y650Q8hI.jpg" />
            <Card.Body>
              <Card.Title><b>La historia real que inspiró “El hombre que quiso ser rey”</b></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.cine-calidad.com/wp-content/uploads/2021/09/4lYoeY8Ukux2EIL18izTeoW8m6P.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.cine-calidad.com/wp-content/uploads/2021/09/tV4DsRCDVl0Xr41o1dGnWgbZ9GL.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.cine-calidad.com/wp-content/uploads/2021/09/tV4DsRCDVl0Xr41o1dGnWgbZ9GL.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.cine-calidad.com/wp-content/uploads/2021/09/tV4DsRCDVl0Xr41o1dGnWgbZ9GL.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.cine-calidad.com/wp-content/uploads/2021/09/tV4DsRCDVl0Xr41o1dGnWgbZ9GL.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
