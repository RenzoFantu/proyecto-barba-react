import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary backc">
      <Container fluid>
        <Navbar.Brand as = {Link} to = '/'><img className = 'logo' src= 'https://res.cloudinary.com/da2aauwq2/image/upload/v1713512881/Beard-Store/logo2.png'/></Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link as = {Link} to = '/'>Inicio</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to = '/epicbarba' href="#action/3.2">Epic Barba</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">No Pendejo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">No Barba</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            
            
            
          </Nav>
          <Form className="d-flex">
            <Button as = {Link} to='/login' variant="outline-success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
