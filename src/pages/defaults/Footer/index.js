import React from 'react';
import { Image, Card, Row, Col, Badge } from 'react-bootstrap';

import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="app-footer">
                <div>
                    <div>
                    <div className="app-footer-content">
                        <span>GARDEN ROSE</span><br></br>
                        <span> wedding & convention</span><br></br>
                        <span>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                        </span><br></br>
                        <span>  360D BẾN VÂN ĐỒN, Quận 4, TP. Hồ Chí Minh</span><br></br>
                        <span> event@gardenrose.vn</span><br></br>
                        <span>  (848) 6256 8888 </span><br></br>

                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer;