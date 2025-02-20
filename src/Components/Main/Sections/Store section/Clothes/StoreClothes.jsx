import React, { useState } from 'react';
import StoreClothesItem from './StoreClothesItem';
import Button from "../../../../UI/Button";
import symbolDefs from '../../../../../assets/symbol-defs.svg';

const StoreClothes = ({ itemsData }) => {

    //стан розширення
    const [isExpanded, setIsExpanded] = useState(false);

    console.log(itemsData);

    //карусель
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = 4;
    const totalItems = itemsData.length;

    //карусель минулий слайд
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 0 : prevIndex - visibleItems
        );
    };

    //карусель наступний слайд
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= totalItems - visibleItems ? prevIndex : prevIndex + visibleItems
        );
    };

    //мап в артікл товарів
    const visibleItemsList = itemsData.map((item, index) => (
        <StoreClothesItem item={item} key={index} />
    ));

    //блок кнопок каруселі
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= totalItems - visibleItems;

    return (
        <div className={`${isExpanded ? 'store-items__container--expanded' : 'store-items__container'}`}>

            <Button
                onClick={() => setIsExpanded(!isExpanded)}
                type={'button'}
                className={'store-items__button-expand'}>

                    <svg className={`store-items__button-expand--arrow ${isExpanded ? 'store-items__button-expand--arrow-active' : ""}`}>
                        <use xlinkHref={`${symbolDefs}#icon-arrow`} />
                    </svg>

            </Button>

            {!isExpanded && (
                <div>
                    {!isAtStart && (
                        <button
                            className={'store-items__buttons-carousel--left'}
                            onClick={goToPrevious}
                            disabled={isAtStart}>
                            <svg className={`store-items__buttons-carousel--left-arrow`}>
                                <use xlinkHref={`${symbolDefs}#icon-arrow`} />
                            </svg>
                        </button>
                    )}

                    {!isAtEnd && (
                        <button
                            className={'store-items__buttons-carousel--right'}
                            onClick={goToNext}
                            disabled={isAtEnd}>
                            <svg className={`store-items__buttons-carousel--right-arrow`}>
                                <use xlinkHref={`${symbolDefs}#icon-arrow`} />
                            </svg>
                        </button>
                    )}
                </div>
            )}

            <div className={`${isExpanded ? '' : 'store-items__list'}`}>

                <div
                    className={`${isExpanded ? 'store-items__list-wrapper--expanded' : 'store-items__list-wrapper'}`}
                    style={{ transform: isExpanded ? 'none' : `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {visibleItemsList}
                </div>

            </div>

        </div>
    );
};

export default StoreClothes;