import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

class TrangTriTiecCuoi extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Row className="app-tieccuoi-item">
                        <Col style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                            <Card className="card-body" bg="transparent" border="transparent">
                                <Card.Body>
                                    <Card.Title>TRANG TRÍ <span style={{ color: '#FBCE0E' }}>TIỆC CƯỚI</span></Card.Title>
                                    <Card.Text>
                                        Các cặp đôi luôn chia sẻ với chúng tôi về điều mà họ thích nhất tại Riverside Palace, chính là gu thẩm mĩ tinh tế, thanh lịch. Với thế mạnh sẵn có và mong muốn tất cả các sự kiện...
                                   </Card.Text>
                                    <Button variant="primary">CHI TIẾT</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ paddingRight: '100px' }}>
                            <Card style={{ marginTop: '-60px' }}>
                                <Card.Img src="images/trangtri.png" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default TrangTriTiecCuoi;