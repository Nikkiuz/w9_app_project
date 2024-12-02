import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="g-2">
          {this.props.FantasyBooks.slice(0, 10).map((OneBook) => {
            return (
              <SingleBook
                book={OneBook}
                key={OneBook.asin}
                changeState={this.props.changeState}
                selected={this.props.selected}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
