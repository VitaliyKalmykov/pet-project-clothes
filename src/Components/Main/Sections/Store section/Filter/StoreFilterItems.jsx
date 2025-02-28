import React from 'react';
import StoreFilterGender from "./Filters/StoreFIlterGender";
import StoreFilterPrice from "./Filters/StoreFilterPrice";
import StoreFilterSeason from "./Filters/StoreFilterSeason";

const StoreFilterItems = () => {
    return (
        <div className={'store-filter__container'}>
            <StoreFilterGender/>
            <StoreFilterPrice/>
            <StoreFilterSeason/>
        </div>
    );
};

export default StoreFilterItems;