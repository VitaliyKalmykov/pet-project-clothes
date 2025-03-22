import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'; // Імпортуємо Link
import HeaderButtons from "./HeaderButtons";
import HeaderNavigation from "./HeaderNavigation";
import HeaderBurgerButton from "./HeaderBurgerButton";
import HeaderSidebar from "./HeaderSidebar";

const Header = ({setIsModal, setModalType}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className={"header"}>
            <div className={'container'}>
                <div className={'header__container'}>
                    <Link to="/Store">
                        <img className="header__logo" src={logo} alt="logo" />
                    </Link>
                    <HeaderButtons setIsModal={setIsModal} setModalType={setModalType} />
                    <HeaderNavigation/>
                    <HeaderBurgerButton setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
                </div>
                <HeaderSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
        </header>
    );
};

export default Header;