import React from 'react';
import HeaderList from "./HeaderList";

const HeaderSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`header__sidebar-container ${isOpen ? "header__sidebar--open" : ""}`}>
            <button onClick={toggleSidebar} className="header__burger">✖</button>
                <HeaderList isOpen={isOpen}/>
            </div>
    );
};

export default HeaderSidebar;