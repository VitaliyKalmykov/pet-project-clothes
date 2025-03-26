import React from 'react';

const Button = ({type, className, onClick, disabled, children}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;