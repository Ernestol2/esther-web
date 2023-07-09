import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">NOSOTROS</Nav.Link>
            <Nav.Link href='#'>PRODUCTOS</Nav.Link>
            <Nav.Link href='#'>MATERIALES</Nav.Link>
            <Nav.Link href='#'>INFO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
