//importo i libri dal file json
import { Col, Container, Row } from "react-bootstrap";
import libri from "../data/fantasy.json";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="g-4">
        {libri.map((libro) => {
          return (
            <Col>
              <Card key={libro.asin} className="CardsHeight">
                <Card.Img
                  className="img-fluid ImgHeight"
                  variant="top"
                  src={libro.img}
                />
                <Card.Body>
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text>{libro.price}€</Card.Text>
                  <Button variant="primary">Aggiungi al carrello</Button>
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
