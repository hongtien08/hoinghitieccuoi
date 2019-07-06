import React from 'react';
import ImageBox from '../../../components/ImageBox';
import BlockIteam from '../../../components/BlockIteam';
import UuDai from '../../../components/UuDai';
import SuKien from '../../../components/SuKien';
import TinTuc from '../../../components/TinTuc';
import { Container, Row, Col } from 'react-bootstrap';


class HomePage extends React.Component {
    // buildFooter() {
    //     let data = {
    //         img: "images/footer.png",
    //         title: "Garden Rose",
    //         content: "Garden Rose tự hào tổ chức thành công nhiều tiệc cưới ấn tượng nhất trong những năm gần đây. Thấu hiểu ước mơ về một tiệc cưới thần tiên của các đôi trẻ, Riverside Palace luôn..."
    //     };
    //     let result = [];
    //         result.push(<Footer data={data} key="01" /> );

    //     return result;
    // }
    buildImageBox() {
        let data = {
            img: "images/anhbia.jpg",
            title: "<span style='border-bottom: 2px solid;padding-bottom: 6px;'>TIỆC CƯỚI <span style='color: #FBCE0E;'>TR</span></span><span style='color: #FBCE0E;'>ỌN VẸN</span>",
            content: "Garden Rose tự hào tổ chức thành công nhiều tiệc cưới ấn tượng nhất trong những năm gần đây. Thấu hiểu ước mơ về một tiệc cưới thần tiên của các đôi trẻ, Riverside Palace luôn...",
            link: "/tieccuoi"
        };
        let result = [];
            result.push(<ImageBox data={data} key="01" /> );

        return result;
    }
    buildBlockItem() {
        let data = 
        [{
            img: "images/hoinghi.jpg",
            title: "HỘI NGHỊ <span style='color: #FBCE0E;'>HOÀN HẢO</span>",
            content: "Riverside Palace có thể đáp ứng cho những đại tiệc hội nghị lên đến 4.500 khách với những tiện ích vượt ngoài mong đợi. Từ hội nghị khách hàng, tiệc liên hoan tất niên hàng năm cho...",
            link: "/hoinghi"
        }, {
            img: "images/sukien.jpg",
            title: "SỰ KIỆN <span style='color: #FBCE0E;'>ĐẲNG CẤP</span>",
            content: "Hội tụ đầy đủ các yếu tố của một trung tâm tổ chức sự kiện hiện đại, từ không gian, địa điểm, phong cách cho đến nguồn nhân lực, trung tâm sự kiện Garden Rose là điểm đến...",
            link: ""
        }]
        let result = [];

        for(let i = 0; i < data.length; i++) {
            result.push(
                <Col key={i} md={6} >
                    <BlockIteam link={data[i].link} key={i} data={data[i]} />
                </Col>
            )
        }

        return result;
    }
    render() {
        return (
            <div className="app-home-page">
                {this.buildImageBox()}
                <Container>
                    <Row>

                    </Row>
                    <Row style={{marginTop: '50px'}}>
                        {this.buildBlockItem()}
                        <UuDai />
                        
                        <SuKien />

                        <TinTuc />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage;