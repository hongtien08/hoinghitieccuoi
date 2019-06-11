import React from 'react';
import { Carousel, } from 'react-bootstrap';

class UuDai extends React.Component {
    render() {
        return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/uudai1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Khởi đầu ngọt ngào cho 
HẠNH PHÚC LỨA ĐÔI 
HOÀN TIỀN lên đến 30 triệu đồng
Khi đặt tiệc cưới tại Garden Rose
Liên hệ 0778918543</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/banhsinhnhat.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
        <h3>TIỆC THÔI NÔI</h3>
      <p> HOÀN HẢO
dành Tặng <a href="#">Bé Yêu</a></p>
<p> Tặng gói trang trí </p>
<p> Tặng bánh sinh nhật</p>
<p> Tặng MC chú hề </p>
<p>Liên hệ 0778918543</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/tieccanhan.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
        <h3>Dạ Tiệc CHIÊU ĐÃI</h3>
      <p>Trọn gói chỉ 450.000 VND++/khách</p>
      <p>Liên hệ 0778918543</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default UuDai;