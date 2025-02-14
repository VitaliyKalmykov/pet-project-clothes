import React from 'react';
import HeaderNavigation from "./HeaderNavigation";

const HeaderSidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <div
            onClick={closeSidebar}
            className={`header__sidebar-container ${isSidebarOpen ? 'header__sidebar-container--open' : 'visually-hidden'}`}
        >
            <aside
                onClick={(event) => event.stopPropagation()}
                className={`header__sidebar ${isSidebarOpen ? 'header__sidebar--open' : ''}`}
            >
                <HeaderNavigation closeSidebar={closeSidebar} />
            </aside>
        </div>
    );
};

export default HeaderSidebar;