import React from 'react';
import Links from '../UI/Links'

const HeaderList = ({isOpen}) => {

    const links = [{
        href: '/',
        text: 'Home'
    }
    ,
        {
            href: '/',
            text: 'Clothes to order'
        },
        {
            href: '/',
            text: 'Our history'
        },
        {
            href: '/',
            text: 'Vacancies'
        },
        {
            href: '/',
            text: 'Contact us'
        },
    ]

    return (
        <div>
            <ul className={`header__list ${isOpen ? 'show' : ''}`}>
                {links.map((link, index) => (
                    <Links href={link.href} key={index} className="link">{link.text}</Links>
                ))}
            </ul>
        </div>
    );
};

export default HeaderList;