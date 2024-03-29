import React from 'react';
import { Row, Card, Button, Col } from 'react-bootstrap';


class HoiNghiItem extends React.Component {
    onClickHandle() {
          window.location.href="/sanhhoinghi";
        }
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
                            <Button onClick={this.onClickHandle.bind(this)} variant="primary">CHI TIẾT</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col style={{paddingRight: '100px'}}>
                        <Card style={{marginTop: '-60px'}}>
                            <Card.Img src="images/trangtrihoinghi.png" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HoiNghiItem;