import React from 'react';

const TextareaInput = ({ name, value, onChange, maxLength }) => {
    return (
        <div className="textarea__container">
            <p>Describe your request here:</p>
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