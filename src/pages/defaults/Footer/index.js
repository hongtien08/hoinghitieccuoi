import React from 'react';
import { Image, Card, Row, Col } from 'react-bootstrap';

import './footer.css';

class Footer extends React.Component {
    buildContent() {
        return ""
    }
    render() {
        return (
            <div className="app-footer">
                {/* <Image src="images/footer.png" fluid /> */}
                <Card className="app-footer-box">
                    <Card.ImgOverlay className="app-footer-content">
                        <Card.Title>
                            <span>GARDEN ROSE</span><br></br>
                            <span> wedding & convention</span><br></br>
                            <span>  360D BẾN VÂN ĐỒN, Quận 4, TP. Hồ Chí Minh</span><br></br>
                            <span> event@gardenrose.vn</span><br></br>
                            <span>  (848) 6256 8888 </span><br></br>
                        </Card.Title>
                        <Card.Text>
                            {this.buildContent()}
                        </Card.Text>
                        {/* <Button variant="primary">CHI TIẾT</Button> */}
                    </Card.ImgOverlay>
                </Card>
            </div>
        )
    }
}

export default Footer;