import React from 'react';
import ImageBox from '../SanhHoiNghi/ImageBox';
import SanhHoiNghi from '../SanhHoiNghi/SanhHoiNghi';
import UuDai from '../SanhHoiNghi/UuDai';
import {Container} from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <ImageBox />
                <SanhHoiNghi />
                <UuDai />
                </Container>
            </div>
        )
    }
}
export default HomePage;