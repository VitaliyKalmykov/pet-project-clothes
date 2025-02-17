import React from 'react';
import hatsData from './hatsData';
import StoreClothesHatsItem from './StoreClothesHatsItem';


const StoreClothesHats = () => {

    return (
        <div>
         <ul className={'store__hats-list'}>
             {hatsData.map((hat, index) => (
             <StoreClothesHatsItem hat={hat} key={index} />
             ))}
         </ul>
        </div>
    );
};

export default StoreClothesHats;
