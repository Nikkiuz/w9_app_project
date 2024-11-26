import { Col, Container, Row, ListGroup } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Container fluid className="bg-dark data-bs-theme-dark">
      <Row className="justify-content-center">
        <Col
          sm="12"
          md="6"
          className="align-content-center bg-dark data-bs-theme-dark"
        >
          <h5 className="text-warning">
            Epic Library © - <span> {new Date().getFullYear()}</span>{" "}
          </h5>
        </Col>

        <Col sm="12" md="6" bg="dark" data-bs-theme="dark">
          <ListGroup>
            <ListGroup.Item className="border border-0">
              <a className="text-decoration-none text-warning" href="#Home">
                Home
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="border border-0">
              <a
                className="text-decoration-none text-warning border border-0"
                href="#About"
              >
                About
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="border border-0">
              <a
                className="text-decoration-none text-warning border border-0"
                href="#Browse"
              >
                Browse
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
