import React from 'react';

import { Card, Button, Container } from 'react-bootstrap';


class BlockIteam extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="images/hoinghi.jpg" />
              <Card.Body>
                <Card.Title>HỘI NGHỊ HOÀN HẢO</Card.Title>
                <Card.Text>
                  Riverside Palace có thể đáp ứng cho những đại tiệc hội nghị lên đến 4.500 khách với những tiện ích vượt ngoài mong đợi. Từ hội nghị khách hàng, tiệc liên hoan tất niên hàng năm cho...
              </Card.Text>
                <Button variant="primary">CHI TIẾT</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="images/sukien.jpg" />
              <Card.Body>
                <Card.Title>SỰ KIỆN ĐẲNG CẤP</Card.Title>
                <Card.Text>
                  Hội tụ đầy đủ các yếu tố của một trung tâm tổ chức sự kiện hiện đại, từ không gian, địa điểm, phong cách cho đến nguồn nhân lực, trung tâm sự kiện Garden Rose là điểm đến...
</Card.Text>
                <Button variant="primary">CHI TIẾT</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )


  }
}
export default BlockIteam;