import React, { useState, useEffect, useRef } from 'react';
import typingSound from '../../assets/audio/type.mp3';

const TextareaInput = ({ name, value, onChange, maxLength, title }) => {
    const [audio] = useState(new Audio(typingSound)); // Ініціалізуємо аудіо один раз
    const textareaRef = useRef(null); // Створюємо референс для текстового поля

    // Функція для відтворення звуку при натисканні клавіші
    const handleKeyDown = (event) => {
        // Перевіряємо, чи клавіша не Shift, чи текстове поле в фокусі і чи не досягнуто maxLength
        if (
            textareaRef.current === document.activeElement && // Перевіряємо, чи textarea в фокусі
            value.length < maxLength &&
            event.key !== 'Shift' &&
            event.key !== 'Control' &&
            event.key !== 'Alt'
        ) {
            audio.play(); // Відтворюємо звук
        }
    };

    // Функція для припинення звуку при відпусканні клавіші
    const handleKeyUp = () => {
        audio.pause(); // Припиняємо звук
        audio.currentTime = 0; // Повертаємо аудіо на початок
        audio.volume = 0.2;
    };

    // Додаємо обробники подій для натискання клавіші при монтуванні компонента
    useEffect(() => {
        const textarea = textareaRef.current;

        // Додаємо обробники подій для textarea
        textarea.addEventListener('keydown', handleKeyDown);
        textarea.addEventListener('keyup', handleKeyUp);

        // Очищаємо обробники подій при демонтажі компонента
        return () => {
            textarea.removeEventListener('keydown', handleKeyDown);
            textarea.removeEventListener('keyup', handleKeyUp);
        };
    }, [value]); // Залежність від value, щоб правильно працювала перевірка

    return (
        <div className="textarea__container">
            <p>{title}</p>
            <textarea
                ref={textareaRef} // Прив'язуємо референс до textarea
                name={name}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                className="textarea"
            ></textarea>
            <span style={{ color: value.length === maxLength ? 'red' : 'inherit' }}>
                {value.length}/{maxLength}
            </span>
        </div>
    );
};

export default TextareaInput;