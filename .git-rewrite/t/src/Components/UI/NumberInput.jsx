import React from 'react';

const NumberInput = ({label, id, name, value, onChange}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={'number'}
                   id={id}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
        </>
    );
};

export default NumberInput;