import React from 'react';

import { Button, Card, Image } from 'react-bootstrap';
class ImageBox extends React.Component {
  bui
  render() {
    return (
      <Card className="app-image-box">
        <Card.Img src={this.props.data.img} alt="Card image" />
        <Card.ImgOverlay className="app-image-content">
        <Card.Title><span dangerouslySetInnerHTML={{__html:this.props.data.title}}></span></Card.Title>
          <Card.Text>
            {this.props.data.content}
          </Card.Text>
          <Button variant="primary">CHI TIẾT</Button>
        </Card.ImgOverlay>
      </Card>
    )
  }
}


export default ImageBox;