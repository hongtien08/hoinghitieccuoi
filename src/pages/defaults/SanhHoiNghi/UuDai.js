import React from 'react';
import { Carousel, } from 'react-bootstrap';

class UuDai extends React.Component {
  render() {
    return (
      <div>
        <h3 className="app-h1">ƯU ĐÃI <span style={{ color: '#FBCE0E' }}>ĐẶC BIỆT</span></h3>
        <Carousel className="app-h1-content">
          <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/uudai1.png"
            alt="First slide"
          />
        </Carousel.Item>  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/banhsinhnhat.png"
              alt="Third slide"
            />
          </Carousel.Item>
           <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/tieccanhan.png"
              alt="Third slide"
            />
          </Carousel.Item> 
        </Carousel>
      </div>
    )
  }
}

export default UuDai;