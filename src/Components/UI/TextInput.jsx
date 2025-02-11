import React, {useState} from 'react';

const TextInput = ({ type, id, name, label }) => {

    const [value, setValue] = useState("");


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
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default TextInput;