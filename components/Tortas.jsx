import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tortas from '../db/tortas';
import Footer from './Footer';
import Menu from './Menu';

export default function Tortas() {


  return (
    <>
      <Menu />
      <Container className='tortas' fluid>
        <h2 className='text-center p-4'>NUESTRAS TORTAS</h2>
        <Row>
          {tortas.map(torta => (
            <Col key={torta.id} xs={9} sm={5} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src={torta.imageUrl} />
                <Card.Body>
                  <Card.Title>{torta.name}</Card.Title>
                  <Card.Text>{torta.price}</Card.Text>
                  <Link to={`/tortas/${torta.id}`} >
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

