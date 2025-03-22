import React from 'react';
import NumberInput from "../../../../../UI/NumberInput";

const StoreFilterPrice = ({filters, setFilters}) => {

    const handleMinPriceChange = (event) => {
        const value = event.target.value === "" ? "" : Number(event.target.value);
        setFilters((prev) => ({ ...prev, priceRange: [value, prev.priceRange[1]] }));
    };

    const handleMaxPriceChange = (event) => {
        const value = event.target.value === "" ? "" : Number(event.target.value);
        setFilters((prev) => ({ ...prev, priceRange: [prev.priceRange[0], value] }));
    };

    return (
        <div>
            <h2 className={'store-filter__price-title'}>
                Price
            </h2>
           <div className={'store-filter__price-container'}>
               <NumberInput
                   label='From'
                   id={'from'}
                   name={'from'}
                   value={filters.priceRange[0]}
                   onChange={handleMinPriceChange}
               />
               <NumberInput
                   label='To'
                   id={'to'}
                   name={'to'}
                   value={filters.priceRange[1]}
                   onChange={handleMaxPriceChange}
               />
           </div>
        </div>
    );
};

export default StoreFilterPrice;