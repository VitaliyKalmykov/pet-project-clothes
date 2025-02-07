import React, {useState} from 'react';
import HeaderList from "./HeaderList";
import HeaderButtons from "./HeaderButtons";
import logo from '../../assets/logo.png'
import HeaderSidebar from "./HeaderSidebar";

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="header">
           <div className={"container"}>
             <div className={"header__container"}>
                 <div>
                     <img className={"header__logo"} src={logo} alt="logo" />
                 </div>
                 <HeaderButtons/>
                 <HeaderList />
                 <button onClick={toggleSidebar} className="header__burger">☰</button>
             </div>
               <HeaderSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
           </div>
        </header>
    );
};

export default Header;