import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container className="text-start">
      <h3 className="text-warning mt-2">Fantasy</h3>
      <Row className="g-3 mt-2 justify-content-center">
        {props.FantasyBooks.slice(0, 10).map((OneBook) => {
          return <SingleBook book={OneBook} key={OneBook.asin} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
