import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

class TiecCuoi extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Row className="app-tieccuoi-item">
                        <Col style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                            <Card className="card-body" bg="transparent" border="transparent">
                                <Card.Body>
                                    <Card.Title>SẢNH <span style={{ color: '#FBCE0E' }}>TIỆC CƯỚI</span></Card.Title>
                                    <Card.Text>
                                        Chúng tôi thấu hiểu bạn luôn mong muốn khoác lên không gian tiệc cưới một màu sắc riêng của mình và người bạn đời. Âm nhạc, hình ảnh, mọi diễn tiến trong ngày cưới của bạn...                                 </Card.Text>
                                    <Button variant="primary">CHI TIẾT</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{ paddingRight: '100px' }}>
                            <Card style={{ marginTop: '-60px' }}>
                                <Card.Img src="images/sanhtieccuoi.png" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default TiecCuoi;