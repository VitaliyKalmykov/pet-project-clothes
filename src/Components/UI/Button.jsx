import React from 'react';

const Button = ({type, className, onClick, disabled, children, onMouseEnter, onMouseLeave}) => {
    return (
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} disabled={disabled} onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;