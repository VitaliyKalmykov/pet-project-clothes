import React, { useState } from 'react';
import symbols from '../../assets/symbol-defs.svg';

const HeaderButtons = () => {
    const [isVolumeHigh, setIsVolumeHigh] = useState(true); // Стан для перемикання між іконками

    const [isLampActive, setIsLampActive] = useState(false); // Стан для перемикання кольору лампи


    const icons = [
        { iconId: "icon-bulb" },
        { iconId: "icon-basket" },
        { iconId: "icon-call" },
        { iconId: "icon-volume-high", secondIconId: "icon-volume-mute" },
    ];

    // Функція для перемикання іконки
    const toggleVolumeIcon = () => {
        setIsVolumeHigh(prev => !prev);
    };

    // Функція для зміни кольору лампи
    const toggleLampColor = () => {
        setIsLampActive(prev => !prev); // Перемикає стан
    };

    return (
        <div className={'header__buttons-container'}>
            {icons.map((icon, index) => (
                <button
                    className={`header__button ${icon.iconId === 'icon-bulb' && isLampActive ? 'header__icon-bulb-active' : ''}`}
                    key={index}
                    onClick=
                        {icon.secondIconId ? toggleVolumeIcon //перемикаємо іконку звуку
                            :
                            icon.iconId === 'icon-bulb' ? toggleLampColor //додаємо класс до лампи
                                :
                                null}
                >
                    <svg className={"header__svg"}>
                        <use href={`${symbols}#${icon.secondIconId && !isVolumeHigh ? icon.secondIconId : icon.iconId}`} />
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default HeaderButtons;