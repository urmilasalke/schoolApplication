import React from 'react'
import { Carousel } from 'react-bootstrap'
function Carousels() {
    return (
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )
}

export default Carousels
