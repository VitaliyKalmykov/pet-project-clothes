import React from 'react';

const HeaderNavigation = () => {
    return (
        <nav className={'header__navigation'}>
            <ul className={'header__navigation-list'}>
                <li><a className={'link'}>Store</a></li>
                <li><a className={'link'}>Wholesale</a></li>
                <li><a className={'link'}>Our history</a></li>
                <li><a className={'link'}>Store addresses</a></li>
                <li><a className={'link'}>Contact us</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;