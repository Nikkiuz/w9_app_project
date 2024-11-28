import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroup key={this.key} variant="dark">
        <ListGroup.Item variant="dark" className="text-warning bg-dark">
          {this.props.singleFeed}
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default SingleComment;
