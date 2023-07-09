import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import logo from '../images/esther-logo.png'
import { Instagram, Facebook } from "react-bootstrap-icons"


export default function Navigation() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <div>FANTASY&apos;S CAKE</div>
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
