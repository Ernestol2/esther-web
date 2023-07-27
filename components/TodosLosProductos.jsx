import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import BackNavigation from "./BackNavigation"
import axios from "axios";

export default function TodosLosProductos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      //crear una variable para la url y cambiar el localhost una vez hecho el deploy
      //se cambio url para prueba

      axios.get('https://fantasys-esther.onrender.com/products')
      .then(response => {
        console.log(response.data);
        setProducts(response.data)
      })
      .catch((e) => {
        console.log(e);
      })
    }, [])
    


  return (
   <>
    <BackNavigation />
        <h1 className="text-center mt-5 text-secondary">Todos los productos</h1>
        <Container className="mt-5">
            <Row className="m-0">
                {products.map(product => (
                    <Col key={product._id} md={4} xs={6} className="m-0 p-2 tarjeta-todos">
                        <Card className="mb-4">
                          <Image variant="top" src={product.path} fluid thumbnail />
                            <Card.Body>
                                <Card.Title>{product.nombre}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
   </>
  )
}
