import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlockIteam from './BlockIteam';

class SuKien extends React.Component {
    buildBlockItem() {
        let data =
            [{
                img: "images/khonggian.png",
                title: "",
                content: "",
                allowButton: false,
                allowBody: false,
                cls: "app-su-kien-left"
            }, {
                img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                title: "THÁNG 1<br><br>KHÔNG GIAN TIỆC TẤT NIÊN SÂN VƯỜN MỚI LẠ TẠI RIVERSIDE PALACE",
                content: "Một bửa tiệc tất niên ngoài trời, bên cạnh dòng sông giữa trung tâm thành phố là một trải nghiệm mới mẻ và thú vị cho các Công ty trong dịp cuối năm mà Garden Rose hân hạnh mang đến trong mùa lễ hội hôm nay.",
                allowButton: true,
                allowImage: true,
                cls: "app-su-kien-right"
            }]
        let result = [];

        for (let i = 0; i < data.length; i++) {
            result.push(
                <Col key={i} md={6} style={{paddingLeft: 0, paddingRight:0}} >
                    <BlockIteam allowImage={data[i].allowImage} allowBody={data[i].allowBody} key={i} cls={data[i].cls} data={data[i]} allowButton={data[i].allowButton} />
                </Col>
            )
        }

        return result;
    }
    render() {
        return (
            <div className="app-su-kien">
                <h3 className="app-h1">SỰ KIỆN <span style={{ color: '#FBCE0E' }}>NỔI BẬC</span> </h3>
                <Container className="app-su-kien-content">
                    <Row>
                        {this.buildBlockItem()}
                    </Row>
                </Container>
            </div>
        )

    }
}

export default SuKien;