import { useState } from 'react';
import axios from 'axios';
import BackNavigation from '../components/BackNavigation'
import { Button, Container, Form } from 'react-bootstrap';

const ProductForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [image, setImage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/productonuevo', {
        nombre,
        descripcion,
        precio,
        image
      },
      { headers: {'Content-Type': 'multipart/form-data'}});
      console.log('Product created:', response.data);
      alert(`El producto ${response.data.nombre} fue creado correctamente`)
    } catch (error) {
      console.error('Error creating product:', error);
      alert("Error creando el producto")
    }

    // Clear form fields
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setImage('');
  };

  return (
    <>
    <BackNavigation />
      <Container>
      <h2 className='text-center text-secondary mt-5'>Añadir producto</h2>
        <Form onSubmit={handleSubmit} className='p-2' >
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control 
              type='text' 
              value={nombre}
              placeholder='Ejemplo: Torta Reina'
              onChange={(e) => setNombre(e.target.value)}
              required
              ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Control 
              as='textarea' 
              value={descripcion}
              placeholder='Descripcion del producto'
              onChange={(e) => setDescripcion(e.target.value)}
              required
              ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Precio:</Form.Label>
            <Form.Control 
              type='text'
              value={precio} 
              placeholder='Ejemplo 40$'
              onChange={(e) => setPrecio(e.target.value)}
              required
              ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Imagen:</Form.Label>
            <Form.Control 
              type='file' 
              name={image}
              accept=".jpg,.jpeg, .png"
              onChange={(e) => setImage(e.target.files[0])}
              required
              ></Form.Control>
          </Form.Group>
          <Button variant="success" type="submit" className='mt-4'>
            Crear producto
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ProductForm;
