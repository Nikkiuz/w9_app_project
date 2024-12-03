import "./App.css";

import books from "./data/fantasy.json";

//allego il foglio bootstrap al progetto
import "bootstrap/dist/css/bootstrap.min.css";

// allego l'elemento Navbar per poi appenderlo nell'header
import CustomNavbar from "./components/CustomNavbar";

// importo il footer
import CustomFooter from "./components/CustomFooter";

// importo l'alert
import CustomWelcome from "./components/CustomWelcome";

import BookList from "./components/BookList";

import { Container, Col, Row } from "react-bootstrap";

import CommentArea from "./components/CommentArea";

import { useState } from "react";

const App = () => {
  // state = {
  //   id: "",
  //   selected: false,
  // };

  const [id, setid] = useState("");
  const [selected, setSelected] = useState(false);

  const changeState = (bookId) => {
    setSelected(bookId);
  };

  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main className="bg-dark">
        <CustomWelcome />
        <Container className="text-start">
          <h3 className="text-warning mt-2">Fantasy</h3>
          <Row className="g-3 mt-2 justify-content-center">
            <Col sm={8}>
              <BookList
                FantasyBooks={books}
                changeState={changeState}
                selected={selected}
              />
            </Col>
            <Col sm={4}>
              <CommentArea id={selected} />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
};

export default App;
