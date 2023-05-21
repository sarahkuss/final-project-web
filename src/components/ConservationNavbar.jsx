import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

export default function ConservationNavbar ({user, setUser}) {
  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return(
    <Navbar className="sticky-top" expand='lg'>
      <Container className="navbar-container" fluid>
        <Navbar.Brand as={Link} to="/"><img className="logo-image" src="../../images/logowords.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="learn-involved">
            <Nav.Link as={Link} to='/learn'>Learn</Nav.Link>
            <Nav.Link as={Link} to='/getinvolved'>Get Involved</Nav.Link>
          </Nav>
            {!user ? (
          <Nav className="justify-content-between">
              
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
            
          </Nav>
              ): (
                <Nav.Link as={Link} onClick={handleLogout}>Logout</Nav.Link>
              )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}