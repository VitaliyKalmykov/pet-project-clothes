import React from 'react';

const TextareaInput = ({ name, value, onChange, maxLength, title }) => {
    return (
        <div className="textarea__container">
            <p>{title}</p>
            <textarea
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