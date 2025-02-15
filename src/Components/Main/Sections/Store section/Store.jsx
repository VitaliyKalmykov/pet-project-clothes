import React from 'react';
import {Link} from "react-router-dom";
import StoreClothesHats from "./Clothes/Hats/StoreClothesHats";

const Store = () => {
    return (
        <section className={"store"}>
          <div className={"container"}>
           <div className={"store__container"}>
            <div className={"store__hats-container"}>
                <Link to={'/Store__hats'} className={'store__link'}>HATS</Link>
                <div><StoreClothesHats/></div>
            </div>
           </div>
          </div>
        </section>
    );
};

export default Store;