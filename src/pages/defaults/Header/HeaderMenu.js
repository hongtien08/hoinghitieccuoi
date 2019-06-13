import React from 'react';
import {
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';

class HeaderMenu extends React.Component {
    render() {
        return (
            <div className="app-menu-header">
                <Navbar bg="transparent" expand="lg" className="app-header-menu">
                <Navbar.Brand>&nbsp;</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Giới Thiệu</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Dịch Vụ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Sự Kiện</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3">Ưu Đãi</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-4">Tin Tức</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-5">Liên Hệ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default HeaderMenu;