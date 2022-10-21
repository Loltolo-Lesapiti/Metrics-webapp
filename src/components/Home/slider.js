import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../images/dollar.png";
import slide2 from "../../images/currency.jpg";
import cardImage from "../../images/forex.jpg";
import "./slider.css";

function Slider() {
  return (
    <Carousel className="slider">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={cardImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Welcome to Taas Forex</h3>
          <p>
            Your home for all the information you need about currency exchange
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
