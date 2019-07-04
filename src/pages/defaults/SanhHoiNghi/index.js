import React from 'react';
import SanhHoiNghi from '../SanhHoiNghi/SanhHoiNghi';
import {Container} from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                <SanhHoiNghi />
                </Container>
            </div>
        )
    }
}
export default HomePage;