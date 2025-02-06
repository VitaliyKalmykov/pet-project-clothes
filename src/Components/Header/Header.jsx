import React from 'react';
import HeaderList from "./HeaderList";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
    return (
        <header className="header">
           <div className={"container"}>
             <div className={"header__container"}>
                 <div className={"header__logo"}>some logo</div>
                 <HeaderButtons/>
                 <HeaderList />
             </div>
           </div>
        </header>
    );
};

export default Header;