import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavigation = ({closeSidebar }) => {
    return (
        <nav className={'header__navigation'}>
            <ul className={'header__navigation-list'}>
                <li><Link to="/Store" className={'link'} onClick={closeSidebar}>Store</Link></li>
                <li><Link to="/Details" className={'link'} onClick={closeSidebar}>Details</Link></li>
                <li><Link to="/OfflineStores" className={'link'} onClick={closeSidebar}>Offline store's</Link></li>
                <li><Link to="/Contact" className={'link'} onClick={closeSidebar}>Contact us</Link></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;