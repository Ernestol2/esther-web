import { Button, Col, Container, Row } from "react-bootstrap";
import delfines from '../images/delfines.jpg'
import { ArrowRightCircle } from 'react-bootstrap-icons'


export default function HeroOne() {
  return (
        <Container className="hero-one" fluid>
            <Row>
              <Col xs={12} sm={5} lg={3}>
                <div>
                  <img className="img-fluid" src={delfines} alt="" />
                </div>
              </Col>
              <Col className="text" xs={12} sm={5} lg={3}>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi dolorum culpa facere numquam nostrum incidunt voluptates, minus perferendis voluptatem consequuntur eligendi quas libero, fugiat quasi animi cum beatae explicabo!</p>
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


