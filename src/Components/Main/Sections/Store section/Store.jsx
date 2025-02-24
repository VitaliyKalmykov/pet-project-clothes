import React from 'react';
import StoreClothes from "./Clothes/StoreClothes";
import hatsData from './Clothes/Hats/hatsData';
import hoodiesData from "./Clothes/Hoodies/hoodiesData";
import pantsData from "./Clothes/Pants/pantsData";
import sweatersData from "./Clothes/Sweaters/sweatersData";

const Store = () => {

    return (
        <div className={'container'}>
            <div className={'store__container'}>
                <StoreClothes itemsData={hatsData} title={'Hats'} />
            </div>
            <div className={'store__container'}>
                <StoreClothes itemsData={hoodiesData} title={'Hoodies'} />
            </div>
            <div className={'store__container'}>
                <StoreClothes itemsData={pantsData} title={'Pants'} />
            </div>
            <div className={'store__container'}>
                <StoreClothes itemsData={sweatersData} title={'Sweaters'} />
            </div>
        </div>
    );
};

export default Store;