import { Button, Col, Container, Row } from "react-bootstrap";
import tequenos from '../images/tequenos.jpg'
import { BsChatDots } from 'react-icons/bs'
 
export default function Invitacion() {
  return (
    <Container className="invitacion" id="contacto" fluid>
        <Row>
            <Col className="text" xs={12} sm={5} lg={3}>
                <div>
                    <h2>Hagamos tu sueño realidad!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam debitis impedit asperiores ex iure tempora ipsa amet sint iusto!</p>
                </div>
                <Button className="m-4">
                    <a href="https://wa.me/+584248867357" target="_blank" rel="noopener noreferrer"></a>
                    Hablemos{' '}
                    <BsChatDots size={23}/>
                </Button>
            </Col>
            <Col xs={12} sm={5} lg={3}>
                <div>
                    <img className="img-fluid" src={tequenos} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  )
}
