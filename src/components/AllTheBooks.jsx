//importo i libri dal file json
import { Col, Container, Row } from "react-bootstrap";
import libri from "../data/fantasy.json";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllTheBooks = () => {
  return (
    <Container className="justify-content-center">
      <Row className="g-2">
        {libri.map((libro) => {
          return (
            <Col className="justify-content-center">
              <Card key={libro.asin} className="CardsHeight bg-dark border-warning">
                <Card.Img
                  className="img-fluid ImgHeight"
                  variant="top"
                  src={libro.img}
                />
                <Card.Body className="text-warning">
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text>{libro.price}€</Card.Text>
                  <Button variant="warning">Aggiungi al carrello</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
