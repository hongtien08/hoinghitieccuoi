import React from 'react';
import ImageBox from '../../../components/ImageBox';

import { Container, Row} from 'react-bootstrap';

class HomePage extends React.Component {

    render() {
        return (
            <div className="app-home-page">
                <Container>
                    <Row>
                        <ImageBox />
                    </Row>
                    <Row>
                   
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage;