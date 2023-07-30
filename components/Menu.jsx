import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
  return (
    <Navbar expand="sm" className='bg-light' sticky='top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/tortas">TORTAS</Nav.Link>
            <Nav.Link href='/dulces'>DULCES</Nav.Link>
            <Nav.Link href='/salados'>SALADOS</Nav.Link>
            <Nav.Link href='#contacto'>CONTACTO</Nav.Link>     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
