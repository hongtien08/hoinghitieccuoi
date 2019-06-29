import React from 'react';

import {CardDeck, Card } from 'react-bootstrap';

class TinTuc extends React.Component {
    render() {
        return (
            <div>
                <h3 className="app-h1">TIN TỨC <span style={{ color: '#FBCE0E' }}>NỔI BẬC</span></h3>
                <CardDeck>
                    <Card className="app-card-title">
                        <Card.Img variant="top" src="images/tintuc.png" />
                        <Card.Body>
                            <Card.Title style={{ color: '#4D4009;'}}>ẤN TƯỢNG VỚI KHÔNG GIAN LỄ CƯỚI SÁNG TẠO TẠI GARDEN ROSE</Card.Title>
                            <Card.Text>
                            Các cặp đôi luôn chia sẻ với chúng tôi về điều mà họ thích nhất tại Garden Rose, chính là gu thẩm mĩ tinh tế, thanh lịch.
      </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/tintuc2.png" />
                        <Card.Body>
                            <Card.Title>TRIỂN LÃM QUỐC TẾ SẢN PHẨM DENIM & JEANS LẦN THỨ 3</Card.Title>
                            <Card.Text>
                            Triển lãm Quốc tế Denim & jeans là một sự kiện thường niên của các   nhà cung cấp sản phẩm Denim nổi tiếng trong khu vực gặp nhau, giới thiệu  các công nghệ, xu hướng và sản phẩm mới nhất với người mua đến từ nhiều  quốc gia trên thế giới do...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/tintuc3.png" />
                        <Card.Body>
                            <Card.Title>KẾ HOẠCH CƯỚI HOÀN HẢO DÀNH CHO BẠN!</Card.Title>
                            <Card.Text>
                            Lễ cưới là một sự kiện quan trọng trong đời của mỗi người. Đó là biểu tượng tinh yêu thật sự của hai người. Vì vậy, việc chuẩn bị chu đáo là rất cần thiết cho một...
      </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>

        )
    }
}

export default TinTuc;