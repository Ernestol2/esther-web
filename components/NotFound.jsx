import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

export default function NotFound() {
  return (
    <Container className="error-page">
      <TbFaceIdError size={100} />
      <h1>Ooops!</h1>
      <h1>Lo siento! Esta pagina no existe.</h1>
      <Link to="/">Volver al inicio</Link>
    </Container>
  );
}
