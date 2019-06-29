import React from 'react';
import { Image, Card, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    buildContent() {
        return ""
    }
    render() {
        return (
            <Row className="app-footer">
                {/* <Image src="images/footer.png" fluid /> */}
                <Card className="app-footer-box">
                    <Card.ImgOverlay className="app-footer-content">
                        <Card.Title>
                            <span>Garden</span>
                        </Card.Title>
                        <Card.Text>
                            {this.buildContent()}
                        </Card.Text>
                        {/* <Button variant="primary">CHI TIẾT</Button> */}
                    </Card.ImgOverlay>
                </Card>
            </Row>
        )
    }
}

export default Footer;