import React from 'react';
import StoreClothes from "./Clothes/StoreClothes";
import hatsData from './Clothes/Hats/hatsData';
import hoodiesData from "./Clothes/Hoodies/hoodiesData";

const Store = () => {

    return (
        <div className={'container'}>
            <div className={'store__container'}>
                <StoreClothes itemsData={hatsData} title={'HATS'} />
            </div>
            <div className={'store__container'}>
                <StoreClothes itemsData={hoodiesData} title={'Hoodies'} />
            </div>
            <div className={'store__container'}>
                <StoreClothes itemsData={hatsData} />
            </div>
            <div className={'store__container'}>
                <StoreClothes itemsData={hatsData} />
            </div>
        </div>
    );
};

export default Store;