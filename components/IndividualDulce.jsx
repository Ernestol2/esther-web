import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import dulces from "../db/dulces";
import Menu from "./Menu";

export default function IndividualDulce() {
  const { id } = useParams(); 

  
  const [dulce, setDulce] = useState(null);

  useEffect(() => {
   
    const foundDulce = dulces.find((dulce) => dulce.id === parseInt(id));
    setDulce(foundDulce);
  }, [id]);

  if (!dulce) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    <Menu />
      <Container className="dulce-id p-4" fluid>
        <Row>
          <Col xs={10} sm={6} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={dulce.imageUrl} />
              <Card.Body>
                <Card.Title>{dulce.name}</Card.Title>
                <Card.Text>{dulce.price}</Card.Text>
                <Card.Text>{dulce.description}</Card.Text>
                <Link to="/dulces">
                  <Button>Todos los dulces</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}