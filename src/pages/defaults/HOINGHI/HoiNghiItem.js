import React from 'react';
import { Row, Card, Button, Col } from 'react-bootstrap';


class HoiNghiItem extends React.Component {
    render() {
        return (
            <div>
                <Row className="app-hoinghi-item">
                    <Col style={{marginBottom:'auto', marginTop: 'auto'}}>
                    <Card className="card-body" bg="transparent" border="transparent">
                        <Card.Body>
                            <Card.Title>SẢNH <span style={{ color: '#FBCE0E' }}>HỘI NGHỊ</span></Card.Title>
                            <Card.Text>
                                Chúng tôi thấu hiểu bạn luôn mong muốn khoác lên không gian tiệc cưới một màu sắc riêng của mình và người bạn đời. Âm nhạc, hình ảnh, mọi diễn tiến trong ngày cưới của bạn...
                                 </Card.Text>
                            <Button variant="primary">CHI TIẾT</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img src="images/trangtrihoinghi.png" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HoiNghiItem;