import React from 'react';
import ImageBox from '../../../components/ImageBox';
import BlockIteam from '../../../components/BlockIteam';
import { Container, Row} from 'react-bootstrap';


class HomePage extends React.Component {

    render() {
        return (
            <div className="app-home-page">
                <Container>
                    <Row>
                        <ImageBox />
                        <BlockIteam />
                    </Row>
                    <Row>
                   
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage;