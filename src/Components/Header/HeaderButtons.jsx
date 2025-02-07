import React, { useState } from 'react';
import symbols from '../../assets/symbol-defs.svg';

const buttons = [
    { iconId: 'icon-basket' },
    { iconId: 'icon-call' },
    { iconId: 'icon-volume-high', secondIconId: 'icon-volume-mute' }, // Тільки ця кнопка змінює іконку
    { iconId: 'icon-bulb' }, // Для цієї кнопки додається клас
];

const HeaderButtons = () => {
    const [isVolumeMuted, setIsVolumeMuted] = useState(false);
    const [isBulbActive, setIsBulbActive] = useState(false);

    const toggleVolumeIcon = () => {
        setIsVolumeMuted(prevState => !prevState);
    };

    const toggleBulbClass = () => {
        setIsBulbActive(prevState => !prevState);
    };

    return (
        <div className="header__buttons-container">
            {buttons.map((button, index) => (
                <button

                    className={`header__button ${
                        button.iconId === 'icon-bulb' && isBulbActive ? 'header__button--active' : ''
                    }`}

                    key={index}

                    onClick=
                        {
                        button.secondIconId
                            ? toggleVolumeIcon
                            : button.iconId === 'icon-bulb'
                                ? toggleBulbClass
                                : undefined
                    }
                >
                    <svg className="header__svg">
                        <use
                            xlinkHref={`${symbols}#${
                                button.secondIconId
                                    ? isVolumeMuted
                                        ? button.secondIconId
                                        : button.iconId
                                    : button.iconId
                            }`}
                        ></use>
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default HeaderButtons;