import React from 'react';
import ImageBox from '../TIECCUOI/ImageBox';
import TiecCuoi from '../TIECCUOI/TiecCuoi';
import ThucDonTiecCuoi from '../TIECCUOI/ThucDonTiecCuoi';
import TrangTriTiecCuoi from '../TIECCUOI/TrangTriTiecCuoi';
import { Container, Row } from 'react-bootstrap';
import './Mystyle.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="app-tieccuoi-page">
                <Container>
                    <Row>
                        <ImageBox />
                        <TiecCuoi />
                        <ThucDonTiecCuoi />
                        <TrangTriTiecCuoi />
                    </Row>
                </Container>

            </div>
        )
    }
}
export default HomePage;