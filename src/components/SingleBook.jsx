import { Card, Button, Col } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col sm="6" md="4">
        <Card
          className="bg-dark border-warning h-100"
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img
            className={
              'img-fluid border-bottom border-warning ${this.state.selected ? "selected" : "" '
            }
            variant="top"
            src={this.props.book.img}
            alt={this.props.book.title + " cover"}
          />
          <Card.Body className="text-warning d-flex flex-column">
            <Card.Title className="">{this.props.book.title}</Card.Title>
            <Card.Text className="flex-grow-1">
              {this.props.book.price} €
            </Card.Text>
            <Button variant="warning">Aggiungi al carrello</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
