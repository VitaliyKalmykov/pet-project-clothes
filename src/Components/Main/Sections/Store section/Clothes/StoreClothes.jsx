import React, { useState, useEffect } from 'react';
import StoreClothesItem from './StoreClothesItem';
import Button from "../../../../UI/Button";
import symbolDefs from '../../../../../assets/symbol-defs.svg';

const StoreClothes = ({ itemsData, title }) => {

    //стан розширення
    const [isExpanded, setIsExpanded] = useState(false);

    console.log(itemsData);

    //карусель
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = itemsData.length;
    const [visibleItems, setVisibleItems] = useState(3);


    //адаптив для каруселі
    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth <= 480) {
                setVisibleItems(1);
            }
            else if (window.innerWidth <= 768) {
                setVisibleItems(2);
            }
            else {
                setVisibleItems(3);
            }
        }
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, [])

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
    const visibleItemsList = itemsData.map((item) => (
        <StoreClothesItem item={item} key={item.name} />
    ));

    //блок кнопок каруселі
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= totalItems - visibleItems;

    return (
        <div className={`${isExpanded ? 'store-items__container--expanded' : 'store-items__container'}`}>

            <h2 className={'store-items__title'}>{title}</h2>


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