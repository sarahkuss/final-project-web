import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ConservationNavbar () {
  return(
    <Navbar className="sticky-top" bg="success" expand='lg'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Conservation Connect</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to='/learn'>Learn</Nav.Link>
            <Nav.Link as={Link} to='/getinvolved'>Get Involved</Nav.Link>
          </Nav>
          <Nav className="justify-content-between">
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}