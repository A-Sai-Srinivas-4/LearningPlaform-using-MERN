import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../Banner1.jpg"
import Banner2 from "../../Banner2.jpg"
import Banner3 from "../../Banner3.jpg"

function CarouselContainer() {
  return (
    <Carousel  indicators={false} controls={false} fade={true} interval={4000} pause={false} className="mt-1 mb-4 slider-container">
      <Carousel.Item >
        <img
          className="d-block  img "
          src={Banner1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src={Banner2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  img"
          src={Banner3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;

