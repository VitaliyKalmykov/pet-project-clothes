import React, { useState, useRef, useEffect } from 'react';

const TextInput = ({ type, id, name, label, value, onChange, volume = 0.2 }) => {
    const audioRef = useRef(new Audio("/assets/audio/type.mp3")); // Завантаження з public/audio/type.mp3
    const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Стан для управління відтворенням звуку
    const inputRef = useRef(null); // Створюємо референс для інпуту


    useEffect(() => {
        audioRef.current.volume = volume; // Встановлюємо значення гучності
    }, [volume]); // Якщо значення volume зміниться, будемо оновлювати гучність

    const handleChange = (e) => {
        // Відтворюємо звук при зміні значення інпуту, якщо звук не грає вже
        if (!isAudioPlaying && inputRef.current === document.activeElement) {
            audioRef.current.play();
            setIsAudioPlaying(true);

            // Коли звук закінчиться, змінюємо стан, щоб знову можна було відтворити звук
            audioRef.current.onended = () => {
                setIsAudioPlaying(false);
            };
        }

        onChange(e); // Викликаємо оригінальний onChange
    };

    return (
        <div className="text-input__container">
            <label
                className={`text-input__label ${value ? "text-input__label--active" : ""}`}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                ref={inputRef} // Прив'язуємо референс до input
                className='text-input__input'
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange} // Викликаємо кастомний onChange для звуку
            />
        </div>
    );
};

export default TextInput;