import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";



const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
}

export default NavBar