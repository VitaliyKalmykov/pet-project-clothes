import React from 'react';
import symbols from '../../assets/symbol-defs.svg';

const buttons = [
    { iconId: 'icon-basket' },
    { iconId: 'icon-call' },
    { iconId: 'icon-volume-high' },
    { iconId: 'icon-bulb' },
];

const HeaderButtons = () => {
    return (
        <div className="header__buttons-container">
            {buttons.map((button, index) => (
                <button className="header__button" key={index}>
                    <svg className="header__svg">
                        <use xlinkHref={`${symbols}#${button.iconId}`}></use>
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default HeaderButtons;