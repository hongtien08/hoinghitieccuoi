import React from 'react';

import {  Button, Card, Image } from 'react-bootstrap';
class ImageBox extends React.Component {
  render() {
    return (
      <div>
        <Image src="images/anhbia.jpg" fluid />;
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>TIỆC CƯỚI TRỌN VẸN</Card.Title>
              <Card.Text>
              Garden Rose tự hào tổ chức thành công nhiều tiệc cưới ấn tượng nhất trong những năm gần đây. Thấu hiểu ước mơ về một tiệc cưới thần tiên của các đôi trẻ, Riverside Palace luôn...
    </Card.Text>
              <Button variant="primary">CHI TIẾT</Button>
            </Card.Body>
          </Card>
      </div>
    )
  }
}


export default ImageBox;