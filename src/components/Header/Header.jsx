import React from 'react';

import './Header.css';
import HeaderTop from '../HeaderUtility/HeaderTop';
import HeaderMiddle from '../HeaderUtility/HeaderMiddle';
import HeaderBottom from '../HeaderUtility/HeaderBottom';

const Header = () => {
    return (
        <div>
           <HeaderTop></HeaderTop>
           <HeaderMiddle></HeaderMiddle>
           <HeaderBottom></HeaderBottom>
            
        </div>
    );
};

export default Header;