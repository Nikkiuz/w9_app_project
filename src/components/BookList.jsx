import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container>
      <Row className="g-2">
        {props.FantasyBooks.slice(0, 10).map((OneBook) => {
          return (
            <SingleBook
              book={OneBook}
              key={OneBook.asin}
              changeState={props.changeState}
              selected={props.selected}
            />
          );
        })}
      </Row>
    </Container>
  );
};
export default BookList;
