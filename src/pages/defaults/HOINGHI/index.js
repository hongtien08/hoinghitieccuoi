import React from 'react';
import ImagesBox from '../HOINGHI/ImagesBox';
import HoiNghiItem from '../HOINGHI/HoiNghiItem';
import ThucDonItem from '../HOINGHI/ThucDonItem';
import TrangThietBiItem from '../HOINGHI/TrangThietBiItem';
import {Container, Row} from 'react-bootstrap';
import './MyStyle.css';


class HomePage extends React.Component {
    render() {
        return (
            <div className="app-hoinghi-page">
              <Container>
                    <Row>
                    <ImagesBox />
                    <HoiNghiItem />
                    <ThucDonItem />
                    <TrangThietBiItem />
                    </Row>
            </Container>
            </div>
        )
    }
}

export default HomePage;