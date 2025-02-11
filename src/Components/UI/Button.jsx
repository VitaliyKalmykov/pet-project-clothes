import React from 'react';

const Button = ({type, className, onClick, children}) => {
    return (
        <button onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;