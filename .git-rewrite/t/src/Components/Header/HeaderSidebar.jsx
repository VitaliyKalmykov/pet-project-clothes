import React, {useEffect} from 'react';
import HeaderNavigation from "./HeaderNavigation";

const HeaderSidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Очищення після закриття компонента
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

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