import React, { useState, useEffect } from 'react';
import StoreClothesItem from './StoreClothesItem';
import Button from "../../../../UI/Button";
import symbolDefs from '../../../../../assets/symbol-defs.svg';

const StoreClothes = ({ itemsData, title, setIsModalItem, setIsItemModalOpen }) => {

    //стан розширення
    const [isExpanded, setIsExpanded] = useState(false);

    //адаптив
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //адаптив
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
    }, []);


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
        <StoreClothesItem
            item={item}
            key={item.name}
            setIsModalItem={setIsModalItem}
            setIsItemModalOpen={setIsItemModalOpen}
        />
    ));

    //блок кнопок каруселі
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= totalItems - visibleItems;

    //адаптив
    const isMobile = screenWidth <= 767;
    const isTablet = screenWidth > 767 && screenWidth <= 1024;

    //перемикач слайдів
    const totalSlides = Math.ceil(totalItems / visibleItems);
    //функція перемикача
    const goToSlide = (index) => {
        setCurrentIndex(index * visibleItems);
    };


    return (
        <div className={`${isExpanded ? 'store-items__container--expanded' : 'store-items__container'}`}>

            <h2 className={'store-items__title'}>{title}</h2>

            {(visibleItemsList.length > (isMobile ? 1 : isTablet ? 2 : 3)) && (
                <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    type="button"
                    className="store-items__button-expand"
                >
                    <svg
                        className={`store-items__button-expand--arrow ${
                            isExpanded ? 'store-items__button-expand--arrow-active' : ''
                        }`}
                    >
                        <use xlinkHref={`${symbolDefs}#icon-arrow`} />
                    </svg>
                </Button>
            )}

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

            {!isExpanded && (
                <div className="store-items__pagination">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <Button
                            key={index}
                            className={`store-items__pagination-dot ${currentIndex / visibleItems === index ? 'store-items__pagination-dot--active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default StoreClothes;