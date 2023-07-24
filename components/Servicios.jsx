import { Col, Container, Row } from "react-bootstrap";
import { FaBirthdayCake, FaPizzaSlice } from 'react-icons/fa';
import { GiCupcake, GiTeacher } from 'react-icons/gi';

export default function Servicios() {
  return (
    
    <Container className="servicios" fluid>
    <h1 className="text-center">Servicios</h1>
        <Row>
            <Col xs={8} lg={4} className="m-4">
                <div className="p-2">
                    <FaBirthdayCake size={40}/>
                </div>
                <h4>Tortas</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis molestias nihil. Quaerat, aliquid officiis?</p>
                <a href="">Informacion</a>
            </Col>
            <Col xs={8} lg={4} className="m-4">
                <div className="p-2">
                    <GiCupcake size={40}/>
                </div>
                <h4>Pasapalos Dulces</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis molestias nihil. Quaerat, aliquid officiis?</p>
                <a href="">Informacion</a>
            </Col>
            <Col xs={8} lg={4} className="m-4">
                <div className="p-2">
                    <FaPizzaSlice size={40}/>
                </div>
                <h4>Pasapalos Salados</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis molestias nihil. Quaerat, aliquid officiis?</p>
                <a href="">Informacion</a>
            </Col>
            <Col xs={8} lg={4} className="m-4">
                <div className="p-2">
                    <GiTeacher size={40}/>
                </div>
                <h4>Cursos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis molestias nihil. Quaerat, aliquid officiis?</p>
                <a href="">Informacion</a>
            </Col>
        </Row>
    </Container>
    
  )
}



