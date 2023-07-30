import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import salados from "../db/salados";
import Menu from "./Menu";

export default function IndividualSalados() {
  const { id } = useParams(); 

  
  const [salado, setSalado] = useState(null);

  useEffect(() => {
   
    const foundSalado = salados.find((salado) => salado.id === parseInt(id));
    setSalado(foundSalado);
  }, [id]);

  if (!salado) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    <Menu />
      <Container className="torta-id p-4" fluid>
        <Row>
          <Col xs={10} sm={6} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={salado.imageUrl} />
              <Card.Body>
                <Card.Title>{salado.name}</Card.Title>
                <Card.Text>{salado.price}</Card.Text>
                <Card.Text>{salado.description}</Card.Text>
                <Link to="/salados">
                  <Button>Pasapalos salados</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}