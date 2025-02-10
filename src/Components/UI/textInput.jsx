import React from 'react';

const TextInput = ({ type, id, name, label, value }) => {
    return (
        <div className="text-input__container">
            <label className="text-input__label" htmlFor={id}>{label}</label>
            <input className='text-input__input'  type={type} id={id} name={name} value={value} />
        </div>
    );
};

export default TextInput;