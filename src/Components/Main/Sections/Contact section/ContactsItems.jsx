import React from 'react';
import symbolDefs from '../../../../assets/symbol-defs.svg';

const socialLinks = [
    { id: 'telegram', href: 'https://t.me/Vitalii_Kalmykov_Work', label: 'Telegram' },
    { id: 'mail', href: 'mailto:vitaliy.kalmykov.work@gmail.com', label: 'Mail' },
    { id: 'skype', href: 'skype:live:.cid.81ae5d0b76522c84', label: 'Skype' },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/vitaliy-kalmykov/', label: 'LinkedIn' }
];

const ContactsItems = () => {
    return (
        <div className="contacts-items">
            {socialLinks.map(({ id, href, label }) => (
                <div key={id} className="contacts-items__container">
                    <a href={href} target="_blank" rel="noopener noreferrer" className="contacts-items__link">
                        <svg className="contacts-items__icon">
                            <use xlinkHref={`${symbolDefs}#icon-${id}`} />
                        </svg>
                    </a>
                    <p className="contacts-items__label">{label}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactsItems;