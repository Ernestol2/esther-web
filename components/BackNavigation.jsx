import { Container, Nav, Navbar } from "react-bootstrap";



export default function BackNavigation() {
  return (
    <Navbar expand="sm" className='backend' bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link href="/todos">PRODUCTOS</Nav.Link>
            <Nav.Link href="/productonuevo">NUEVO</Nav.Link>
            <Nav.Link href='#'>BORRAR</Nav.Link>
            <Nav.Link href='/'>INICIO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
