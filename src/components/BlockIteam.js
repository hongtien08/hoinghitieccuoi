import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './css/BlockItem.css';

class BlockIteam extends React.Component {
  render() {
    return (
      <Card className="app-block-item">
        <Card.Img variant="top" src={this.props.data.img} />
        <Card.Body>
          <Card.Title><span dangerouslySetInnerHTML={{__html:this.props.data.title}}></span></Card.Title>
          <Card.Text>
          {this.props.data.content}
          </Card.Text>
          <Button variant="primary">CHI TIẾT</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default BlockIteam;