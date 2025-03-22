import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import HeaderNavigation from "./HeaderNavigation";
import headerBackgroundDark from "../../assets/backgrounds/header_background_dark.mp4";
import headerBackgroundLight from "../../assets/backgrounds/header_background_light.mp4";

const HeaderSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const { theme } = useContext(ThemeContext);

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSidebarOpen]);

    return (
        <div
            onClick={closeSidebar}
            className={`header__sidebar-container ${isSidebarOpen ? "header__sidebar-container--open" : "visually-hidden"}`}
        >
            <aside
                onClick={(event) => event.stopPropagation()}
                className={`header__sidebar ${isSidebarOpen ? "header__sidebar--open" : ""}`}
            >
                <HeaderNavigation closeSidebar={closeSidebar} />
                <div className="header__sidebar-background">
                    <video autoPlay loop muted playsInline preload="auto" className={theme === "dark" ?
                        "header__sidebar-background--active" : "header__sidebar-background--hidden"}>
                        <source src={headerBackgroundDark} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted playsInline preload="auto" className={theme === "light" ?
                        "header__sidebar-background--active" : "header__sidebar-background--hidden"}>
                        <source src={headerBackgroundLight} type="video/mp4" />
                    </video>
                </div>
            </aside>
        </div>
    );
};

export default HeaderSidebar;