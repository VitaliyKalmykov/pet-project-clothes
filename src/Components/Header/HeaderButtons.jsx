import React, { useState, useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const HeaderButtons = ({ setIsModal, setModalType }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isVolumeHigh, setIsVolumeHigh] = useState(false);
    const [isLampActive, setIsLampActive] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/assets/audio/bgmusic.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.09;
    }, []);

    const icons = [
        { iconId: "icon-bulb" },
        { iconId: "icon-basket" },
        { iconId: "icon-call" },
        { iconId: "icon-volume-high", secondIconId: "icon-volume-mute" },
    ];

    const toggleVolumeIcon = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsVolumeHigh(prev => !prev);
    };

    const toggleLampColor = () => {
        setIsLampActive(prev => !prev);
    };

    const handleOpenModal = (modalType) => {
        setIsModal(true);
        setModalType(modalType);
    };

    return (
        <div className={'header__buttons-container'}>
            {icons.map((icon, index) => (
                <button
                    className={`header__button ${icon.iconId === 'icon-bulb' && isLampActive ? 'header__icon-bulb-active' : ''}`}
                    key={index}
                    onClick={() => {
                        if (icon.iconId === "icon-volume-high" || icon.iconId === "icon-volume-mute") {
                            toggleVolumeIcon();
                        } else if (icon.iconId === "icon-bulb") {
                            toggleLampColor();
                            toggleTheme();
                        } else if (icon.iconId === "icon-call") {
                            handleOpenModal("call");
                        } else if (icon.iconId === "icon-basket") {
                            handleOpenModal("cart");
                        }
                    }}
                >
                    <svg className={"header__svg"}>
                        <use href={`/assets/symbol-defs.svg#${icon.secondIconId && !isVolumeHigh ? icon.secondIconId : icon.iconId}`} />
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default HeaderButtons;