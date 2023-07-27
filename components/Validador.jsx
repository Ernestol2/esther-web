import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Validador() {

    const [ email, setEmail ] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [login, setLogin] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "https://fantasys-esther.onrender.com/admin",
            data: {
                email,
                contraseña
            }
        }

        axios(configuration)
          .then((result) => {
            setLogin(true)
            cookies.set("TOKEN", result.data.token, { path: "/" })
            window.location.href="/productonuevo";
          })
          .catch((e) => {
            e = new Error();
            console.log(e);
          })
    }


  return (
    <div className="validador-container container p-2 d-flex justify-content-center">
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email"
                    name='email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@ejemplo.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control 
                    type="password"
                    name='contraseña'
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)} 
                    placeholder="Contraseña" />
            </Form.Group>
            <Button 
                variant="success" 
                type="submit" 
                onClick={(e) => handleSubmit(e)}>
                Ingresar
            </Button>
            {login ? (
                <p className="text-success">Credenciales correctas!</p>
                ) : (
                <p className="text-danger">Ingresa credenciales</p>
                )}
        </Form>
    </div>
  );
}

export default Validador;