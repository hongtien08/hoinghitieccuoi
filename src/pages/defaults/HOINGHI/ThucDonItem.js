import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

class ThucDonItem extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src="images/thucdon1.png" />
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                        <Card className="card-body" bg="transparent" border="transparent">
                            <Card.Body>
                                <Card.Title>THỰC ĐƠN<span style={{ color: '#FBCE0E' }}>HỘI NGHỊ</span></Card.Title>
                                <Card.Text>
                                Một buổi tiệc chiêu đãi hoàn hảo trong ngày cưới sẽ thể hiện lòng mến khách của gia đình cũng như tương lai thịnh vượng cho đôi bạn trẻ. Thấu hiểu mối quan tâm hàng đầu của các...
                                 </Card.Text>
                                <Button variant="primary">CHI TIẾT</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default ThucDonItem;