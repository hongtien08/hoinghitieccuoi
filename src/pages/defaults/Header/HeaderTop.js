import React from 'react';
import {
    Navbar
} from 'react-bootstrap';

class HeaderTop extends React.Component {
    render() {
        return (
            <div className="app-header-top">
                <Navbar bg="transparent">
                    <Navbar.Brand href="/">
                        <div>Graden Rose</div>
                        <div className="app-header-top-sub">wedding & convention</div>
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default HeaderTop;