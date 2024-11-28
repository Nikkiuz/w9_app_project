import { Card, Button, Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col sm="6" md="4">
        <Card
          className="bg-dark border-warning"
          style={{
            border: this.state.selected ? "8px solid" : "",
          }}
        >
          <Card.Img
            onClick={() => this.setState({ selected: !this.state.selected })}
            className="img-fluid border-bottom border-warning"
            variant="top"
            src={this.props.book.img}
            alt={this.props.book.title + " cover"}
          />
          <Card.Body className="text-warning d-flex flex-column">
            <Card.Title className="">{this.props.book.title}</Card.Title>
            <Card.Text className="flex-grow-1 text-end">
              {this.props.book.price} €
            </Card.Text>
            {this.state.selected && <CommentArea id={this.props.book.asin} />}
            {this.state.selected && (
              <Button className="mt-3" variant="warning">
                Lascia una recensione
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
