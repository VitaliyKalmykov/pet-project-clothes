import React, {useState, useContext, useRef, useEffect} from 'react';
import symbols from '../../assets/symbol-defs.svg';
import {ThemeContext} from '../../ThemeContext/ThemeContext';
import bgmusic from '../../assets/audio/bgmusic.mp3'

const HeaderButtons = ({setIsModal, setModalType}) => {

    const { theme, toggleTheme } = useContext(ThemeContext); // Отримуємо тему та функцію перемикання

    const [isVolumeHigh, setIsVolumeHigh] = useState(false); // Стан для перемикання між іконками

    const [isLampActive, setIsLampActive] = useState(true); // Стан для перемикання кольору лампи

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(bgmusic);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.09;
    }, []);


    const icons = [
        { iconId: "icon-bulb" },
        { iconId: "icon-basket" },
        { iconId: "icon-call" },
        { iconId: "icon-volume-high", secondIconId: "icon-volume-mute" },
    ];

    // Функція для перемикання іконки
    const toggleVolumeIcon = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsVolumeHigh(prev => !prev);
    };

    // Функція для зміни кольору лампи
    const toggleLampColor = () => {
        setIsLampActive(prev => !prev); // Перемикає стан
    };
    //Відкриття модального вікна
    const handleOpenModal = (modalType) => {
        setIsModal(true);
        setModalType(modalType);
    }

    return (
        <div className={'header__buttons-container'}>
            {icons.map((icon, index) => (
                <button
                    className={`header__button ${icon.iconId === 'icon-bulb' && isLampActive ? 'header__icon-bulb-active' : ''}`}
                    key={index}
                    onClick={() => {
                        if (icon.iconId === "icon-volume-high" || icon.iconId === "icon-volume-mute") {
                            toggleVolumeIcon(); // Перемикаємо іконку звуку
                        } else if (icon.iconId === "icon-bulb") {
                            toggleLampColor(); // Перемикаємо колір лампи
                            toggleTheme()
                        } else if (icon.iconId === "icon-call") {
                            handleOpenModal("call"); // Відкриваємо модалку зворотного зв'язку
                        } else if (icon.iconId === "icon-basket") {
                            handleOpenModal("cart"); // Відкриваємо модалку корзини
                        }
                    }}
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