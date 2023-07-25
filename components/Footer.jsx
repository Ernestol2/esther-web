import { Col, Container, Row } from "react-bootstrap";
import logo from '../images/esther-logo.png'
import { Facebook, Instagram, Tiktok } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <Container className="footer" fluid>
        <Row>
            <Col className="img mb-4" xs={12} sm={6} lg={6}>
                <img src={logo} alt="" />
            </Col>
            <Col className="icons mt-4" xs={12} sm={6} lg={6}>
                <Facebook size={35}/>
                <a href="https://www.instagram.com/fantasys_cakeve/" target="_blank" rel="noopener noreferrer"><Instagram size={35}/></a>
                <Tiktok size={35}/>
            </Col>
        </Row>
        <Row>
            <p className="pie mt-4 mb-4">&copy; 2023 Fantasy&apos;s Cake - Derechos Reservados</p>
        </Row>
    </Container>
  )
}
