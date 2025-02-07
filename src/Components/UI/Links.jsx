import React from 'react';

const Links = ({href, className, children}) => {
    return (
        <a href={href} className={className}>{children}</a>
    );
};

export default Links;