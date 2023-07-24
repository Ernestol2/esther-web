import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Instagram, Facebook } from "react-bootstrap-icons"


export default function Navigation() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="ligth" id="inicio">
        <Container>
          <Navbar.Brand href="#home">
            <div className="brand">FANTASY&apos;S CAKE</div>
          </Navbar.Brand>
          <Nav>
            <NavLink className="social">
                <Instagram />
                <Facebook />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
