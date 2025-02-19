import React, {useState} from 'react';
import StoreClothesHats from "./Clothes/Hats/StoreClothesHats";
import Button from "../../../UI/Button";

const Store = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => {
        setIsExpanded(!isExpanded); // Перемикаємо стан розширення
    };

    return (
        <section className={"store"}>
          <div className={"container"}>
           <div className={"store__container"}>
            <div className={"store__hats-container"}>
                <Button onClick={handleExpand} className={"store__button-expand"} type={"button"}>HATS</Button>
               <StoreClothesHats isExpanded={isExpanded} />
            </div>
           </div>
          </div>
        </section>
    );
};

export default Store;