import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="text-warning"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="text-warning">
          Epic Library
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-warning"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="text-warning">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-warning">
              About
            </Nav.Link>
            <Nav.Link href="#deets" className="text-warning">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
