import React from 'react';
import ImagesBox from '../HOINGHI/ImagesBox';
import {Container, Row} from 'react-bootstrap';


class HomePage extends React.Component {
    render() {
        return (
            <div className="app-home-page">
              <Container>
                    <Row>
                    <ImagesBox />
                    </Row>
            </Container>
            </div>
        )
    }
}

export default HomePage;