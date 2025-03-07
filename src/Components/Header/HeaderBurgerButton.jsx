import React from 'react';

const HeaderBurgerButton = ({isSidebarOpen, setIsSidebarOpen}) => {

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }


    return (
        <button
            onClick={toggleSidebar}
            className={`header__burger-button ${isSidebarOpen ? 'header__burger-button--active' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default HeaderBurgerButton;