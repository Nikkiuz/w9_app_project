import { Component } from "react";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <Container className="text-start">
        <h3 className="text-warning mt-2">Fantasy</h3>
        <Row className="g-3 mt-2 justify-content-center">
          <Col sm={8}>
            <Row className="g-2">
              {this.props.FantasyBooks.slice(0, 10).map((OneBook) => {
                return <SingleBook book={OneBook} key={OneBook.asin} />;
              })}
            </Row>
          </Col>
          <Col sm={4}>
            <CommentArea />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
