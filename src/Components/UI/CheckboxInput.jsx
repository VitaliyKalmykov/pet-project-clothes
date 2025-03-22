import React from 'react';

const CheckboxInput = ({id, name, label, checked, onChange}) => {
    return (
       <>
            <input
                type='checkbox'
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
       </>
    );
};

export default CheckboxInput;