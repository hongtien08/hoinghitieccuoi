import React from 'react';

import { Button, Card, Image } from 'react-bootstrap';
class ImageBox extends React.Component {
  render() {
    return (

      <Card className="app-image-box">
        <Card.Img src="images/anhbia.jpg" alt="Card image" />
        <Card.ImgOverlay className="app-image-content">
          <Card.Title>TIỆC CƯỚI TRỌN VẸN</Card.Title>
          <Card.Text>
            Garden Rose tự hào tổ chức thành công nhiều tiệc cưới ấn tượng nhất trong những năm gần đây. Thấu hiểu ước mơ về một tiệc cưới thần tiên của các đôi trẻ, Riverside Palace luôn...
          </Card.Text>
          <Button variant="primary">CHI TIẾT</Button>
        </Card.ImgOverlay>
      </Card>

    )
  }
}


export default ImageBox;