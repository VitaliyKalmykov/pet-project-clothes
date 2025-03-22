import React from 'react';
import StoreFilterGender from "./Filters/StoreFIlterGender";
import StoreFilterPrice from "./Filters/StoreFilterPrice";
import StoreFilterSeason from "./Filters/StoreFilterSeason";
import StoreFilterSearch from "./Filters/StoreFilterSearch";

const StoreFilterItems = ({filters, setFilters}) => {
    return (
        <div className={'store-filter__container'}>
            <StoreFilterGender filters={filters} setFilters={setFilters} />
            <StoreFilterPrice filters={filters} setFilters={setFilters} />
            <StoreFilterSeason filters={filters} setFilters={setFilters} />
            <StoreFilterSearch filters={filters} setFilters={setFilters} />
        </div>
    );
};

export default StoreFilterItems;