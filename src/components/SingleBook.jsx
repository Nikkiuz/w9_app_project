import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
    return (
      <Col sm="6" md="4">
        <Card
          className="bg-dark border-warning h-100"
          onClick={() => {
            props.changeState(props.book.asin);
          }}
          value={props.selected}
          style={{
            border:
              props.selected === props.book.asin ? "8px solid" : "",
          }}
        >
          <Card.Img
            className="img-fluid border-bottom border-warning"
            variant="top"
            src={props.book.img}
            alt={props.book.title + " cover"}
          />
          <Card.Body className="text-warning d-flex flex-column">
            <Card.Title className="">{props.book.title}</Card.Title>
            <Card.Text className="flex-grow-1 text-end">
              {props.book.price} €
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }

export default SingleBook;
