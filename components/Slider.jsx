import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import cake15 from '../images/15cake.jpg'
import delfines from '../images/delfines.jpg'
import flores from '../images/flores.jpg'
import paris from '../images/paris.jpg'

function Slider() {
  return (
    <section className='slider-container'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={6000}>
          <Image
            className="d-block w-100"
            src={cake15}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <Image
            className="d-block w-100"
            src={delfines}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <Image
            className="d-block w-100"
            src={flores}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <Image
            className="d-block w-100"
            src={paris}
            alt="Fourth slide"
          />
        </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default Slider;
