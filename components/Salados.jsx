import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import salados from '../db/salados';
import Footer from './Footer';
import Menu from './Menu';

export default function Salados() {


  return (
    <>
      <Menu />
      <Container className='tortas' fluid>
        <h2 className='text-center p-4'>PASAPALOS SALADOS</h2>
        <Row>
          {salados.map(salado => (
            <Col key={salado.id} xs={8} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src={salado.imageUrl} />
                <Card.Body>
                  <Card.Title>{salado.name}</Card.Title>
                  <Card.Text>{salado.price}</Card.Text>
                  <Link to={`/salados/${salado.id}`} >
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