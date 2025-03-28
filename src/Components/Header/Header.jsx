import React, { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import logo from "../../assets/logo.png";
import headerBackgroundDark from "../../assets/backgrounds/header_background_dark.mp4";
import headerBackgroundLight from "../../assets/backgrounds/header_background_light.mp4";
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
                        <img className="header__logo" src={logo} alt="logo" />
                    </Link>
                    <HeaderButtons setIsModal={setIsModal} setModalType={setModalType} />
                    <HeaderNavigation />
                    <HeaderBurgerButton setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
                </div>
                <HeaderSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>

            {/* Блок з двома відео */}
            <div className="header__background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={theme === "dark" ? "header__background--active" : "header__background--hidden"}
                >
                    <source src={headerBackgroundDark} type="video/mp4" />
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={theme === "light" ? "header__background--active" : "header__background--hidden"}
                >
                    <source src={headerBackgroundLight} type="video/mp4" />
                </video>
            </div>
        </header>
    );
};

export default Header;