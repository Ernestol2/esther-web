import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import tortas from "../db/tortas";
import Menu from "./Menu";
import NotFound from "./NotFound";

export default function IndividualTorta() {
  const { id } = useParams(); 

  
  const [torta, setTorta] = useState(null);

  useEffect(() => {
   
    const foundTorta = tortas.find((torta) => torta.id === parseInt(id));
    setTorta(foundTorta);
  }, [id]);

  if (!torta) {
    return (
      <NotFound />
    ); 
  }

  return (
    <>
    <Menu />
      <Container className="torta-id p-4" fluid>
        <Row>
          <Col xs={10} sm={6} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={torta.imageUrl} />
              <Card.Body>
                <Card.Title>{torta.name}</Card.Title>
                <Card.Text>{torta.price}</Card.Text>
                <Card.Text>{torta.description}</Card.Text>
                <Link to="/tortas">
                  <Button>Todas las tortas</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}
