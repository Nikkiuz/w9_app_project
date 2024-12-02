import { Card, Button, Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    return (
      <Col sm="6" md="4">
        <Card
          className="bg-dark border-warning h-100"
          onClick={() => {
            this.props.changeState(this.props.book.asin);
          }}
          value={this.props.selected}
          style={{
            border:
              this.props.selected === this.props.book.asin ? "8px solid" : "",
          }}
        >
          <Card.Img
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
            {/* {this.selected && <CommentArea id={this.props.book.asin} />}
            {this.selected && (
              <Button className="mt-3" variant="warning">
                Lascia una recensione
              </Button>
            )} */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
