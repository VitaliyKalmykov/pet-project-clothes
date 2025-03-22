import React, { useState } from 'react';
import Button from "../../../../UI/Button";
import StoreFilterItems from "./StoreFilterItems";
import symbols from '../../../../../assets/symbol-defs.svg';

const StoreFilter = ({filters, setFilters}) => {

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const [animationFilterButton, setAnimationFilterButton] = useState(false);

    //зброс фільтрів
    const resetFilters = () => {
        setFilters({
            gender: "",
            priceRange: [0, 1000],
            season: "",
            search: "",
        });
        setAnimationFilterButton(prevState => !prevState);
        setTimeout(() => {
            setAnimationFilterButton(false);
        }, 500);
    };

    return (
        <div className="store-filter">
            <Button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                type="button"
                className="button store-filter__button"
            >
                <p className={'store-filter__title'}>Filters</p>
                <svg className={`store-filter__button-open ${isFiltersOpen ? 'store-filter__button-open--active' : ''}`}>
                    <use href={`${symbols}#icon-arrow`} />
                </svg>
            </Button>
            <div className={`store-filter__items ${isFiltersOpen ? 'store-filter__items--open' : ''}`}>
                <StoreFilterItems filters={filters} setFilters={setFilters} />
                <Button className={'store-filter__reset-button'} onClick={resetFilters} type="button">
                    <svg className={`store-filter__reset-icon ${animationFilterButton ? 'store-filter__reset-icon--spin' : ''}`}>
                        <use href={`${symbols}#icon-spinner`} />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default StoreFilter;