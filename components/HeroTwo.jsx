import { Button, Col, Container, Row } from "react-bootstrap";
import paris from '../images/paris.jpg'
import { ArrowRightCircle } from 'react-bootstrap-icons'


export default function HeroTwo() {
  return (
    <Container className="hero-two" fluid>
        <Row>
            <Col xs={12} sm={5} lg={3}>
                <div>
                    <img className="img-fluid" src={paris} alt="" />
                </div>
            </Col>
            <Col className="text" xs={12} sm={5} lg={3}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam iure, eaque, quisquam atque ipsum consequatur numquam id blanditiis vero esse, modi praesentium nobis nam! Aspernatur, aliquam corporis. Odio, enim?</p>
                </div>
                <Button>
                    Mas{' '}
                    <ArrowRightCircle />
                </Button>
            </Col>
        </Row>
    </Container>
  )
}
