import React from 'react';

const RadioInput = ({name, options, selectedValue, onChange}) => {
    return (
        <>
            {options.map((option) => (
                <div key={option.value}>
                    <input
                    type='radio'
                    id={option.value}
                    name={name}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={onChange}
                    />
                        <label htmlFor={option.value}>{option.label}</label>
                </div>
            ))}
        </>
    );
};

export default RadioInput;