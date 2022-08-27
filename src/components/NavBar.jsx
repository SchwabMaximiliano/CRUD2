import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Link to="/" className="navbar-brand">Inicio</Link>
          <Nav className="me-auto">
            <Link to="/new" className="nav-link">Nuevo</Link>  
          </Nav>
        </Container>
      </Navbar>
      
    )
}