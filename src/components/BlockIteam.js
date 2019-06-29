import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './css/BlockItem.css';

class BlockIteam extends React.Component {
  onClickHandle() {
    if(this.props.link) {
      window.location.href=this.props.link;
    }
  }
  render() {
    let showButton = true,
      showBody = true,
      showImage = true;
    if (this.props.allowButton === false) {
      showButton = false;
    }
    if (this.props.allowBody === false) {
      showBody = false;
    }
    if (this.props.allowImage === false) {
      showImage = false;
    }
    return (
      <Card className={"app-block-item " + this.props.cls}>
        {showImage ? (
          <Card.Img variant="top" src={this.props.data.img} />
        ) : ""
        }
        {showBody ?
          (
            <Card.Body>
              <Card.Title><span dangerouslySetInnerHTML={{ __html: this.props.data.title }}></span></Card.Title>
              <Card.Text>
                {this.props.data.content}
              </Card.Text>
              {showButton ? (<Button onClick={this.onClickHandle.bind(this)} variant="primary">CHI TIẾT</Button>) : ""}
            </Card.Body>
          )
          : ""}

      </Card>
    )
  }
}
export default BlockIteam;