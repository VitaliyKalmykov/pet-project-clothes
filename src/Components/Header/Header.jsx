import React, { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import HeaderNavigation from "./HeaderNavigation";
import HeaderBurgerButton from "./HeaderBurgerButton";
import HeaderSidebar from "./HeaderSidebar";

const Header = ({ setIsModal, setModalType }) => {
    const { theme } = useContext(ThemeContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link to="/Store">
                        <img className="header__logo" src="/assets/logo.png" alt="logo" />
                    </Link>
                    <HeaderButtons setIsModal={setIsModal} setModalType={setModalType} />
                    <HeaderNavigation />
                    <HeaderBurgerButton setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
                </div>
                <HeaderSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>

            <div className="header__background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={theme === "dark" ? "header__background--active" : "header__background--hidden"}
                >
                    {/* Шлях до темного бекграунду в public */}
                    <source src="/assets/backgrounds/header_background_dark.mp4" type="video/mp4" />
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={theme === "light" ? "header__background--active" : "header__background--hidden"}
                >
                    {/* Шлях до світлого бекграунду в public */}
                    <source src="/assets/backgrounds/header_background_light.mp4" type="video/mp4" />
                </video>
            </div>
        </header>
    );
};

export default Header;