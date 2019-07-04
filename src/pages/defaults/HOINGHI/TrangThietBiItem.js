import React from 'react';
import{Row, Col, Card, Button} from 'react-bootstrap';

class TrangThietBiItem extends React.Component {
    render() {
        return (
            <div>
                <Row className="app-hoinghi-item">
                    <Col style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                        <Card className="card-body" bg="transparent" border="transparent">
                            <Card.Body>
                                <Card.Title>TRANG THIẾT BỊ<span style={{ color: '#FBCE0E' }}> HỘI NGHỊ</span></Card.Title>
                                <Card.Text>
                                Các cặp đôi luôn chia sẻ với chúng tôi về điều mà họ thích nhất tại Riverside Palace, chính là gu thẩm mĩ tinh tế, thanh lịch. Với thế mạnh sẵn có và mong muốn tất cả các sự kiện...
                                 </Card.Text>
                                <Button variant="primary">CHI TIẾT</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingRight: '100px' }}>
                        <Card style={{ marginTop: '-60px' }}>
                            <Card.Img src="images/trangtri1.png" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TrangThietBiItem;