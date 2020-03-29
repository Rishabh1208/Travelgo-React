import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class BootstrapCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/pic1.jpg"
      alt="First slide"
      style={{width:"1024px", height:"720px"}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/pic2.jpg"
      alt="Third slide"
      style={{width:"1024px", height:"720px"}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/pic3.jpg"
      alt="Third slide"
      style={{width:"1024px", height:"720px"}}
    />
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
