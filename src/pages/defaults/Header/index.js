import React from 'react';

import HeaderMenu from './HeaderMenu';
import HeaderTop from './HeaderTop';

import "./MyStyle.css";

class Header extends React.Component {
    render() {
        return (
            <div>
                <HeaderMenu />
                <HeaderTop />
                
            </div>
        )
    }
}

export default Header;