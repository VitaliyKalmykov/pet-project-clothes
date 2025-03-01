import React from 'react';
import StoreFilterGender from "./Filters/StoreFIlterGender";
import StoreFilterPrice from "./Filters/StoreFilterPrice";
import StoreFilterSeason from "./Filters/StoreFilterSeason";
import StoreFilterSearch from "./Filters/StoreFilterSearch";

const StoreFilterItems = () => {
    return (
        <div className={'store-filter__container'}>
            <StoreFilterGender/>
            <StoreFilterPrice/>
            <StoreFilterSeason/>
            <StoreFilterSearch/>
        </div>
    );
};

export default StoreFilterItems;