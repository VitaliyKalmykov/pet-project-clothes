import React from 'react';

const TextInput = ({ type, id, name, label, value, onChange }) => {

    return (
        <div className="text-input__container">
            <label
                className={`text-input__label ${value ? "text-input__label--active" : ""}`}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className='text-input__input'
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;