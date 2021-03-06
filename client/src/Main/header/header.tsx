import React from 'react';
import HeaderTop from "./header-top";
import HeaderMiddle from "./header-middle";
import HeaderNav from "./header-nav";

const Header: React.FC = () => {
    return (
        <header>
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderNav/>
        </header>
    );
};

export default Header;
