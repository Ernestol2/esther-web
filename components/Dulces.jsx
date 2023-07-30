import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dulces from '../db/dulces';
import Footer from './Footer';
import Menu from './Menu';

export default function Dulces() {


  return (
    <>
      <Menu />
      <Container className='dulces' fluid>
        <h2 className='text-center p-4'>NUESTROS DULCES</h2>
        <Row>
          {dulces.map(dulce => (
            <Col key={dulce.id} xs={8} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src={dulce.imageUrl} />
                <Card.Body>
                  <Card.Title>{dulce.name}</Card.Title>
                  <Card.Text>{dulce.price}</Card.Text>
                  <Link to={`/dulces/${dulce.id}`} >
                    <Button>Mas</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
