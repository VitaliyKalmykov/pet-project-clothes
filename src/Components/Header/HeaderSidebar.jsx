import React from 'react';
import HeaderNavigation from "./HeaderNavigation";

const HeaderSidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <div
            onClick={closeSidebar}
            className={`header__sidebar-container ${isSidebarOpen ? 'header__sidebar-container--open' : ''}`}
           >
            <aside
                onClick={(event) => event.stopPropagation()}
                className={`header__sidebar`}>
                <HeaderNavigation/>
            </aside>
        </div>
    );
};

export default HeaderSidebar;