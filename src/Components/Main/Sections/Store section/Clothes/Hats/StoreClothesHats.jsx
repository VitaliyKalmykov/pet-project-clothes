import React, { useState } from 'react';
import hatsData from './hatsData';
import StoreClothesHatsItem from './StoreClothesHatsItem';

const StoreClothesHats = ({isExpanded}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = 4;
    const totalItems = hatsData.length;

    // Функція для переходу до попереднього елементу
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 0 : prevIndex - visibleItems
        );
    };

    // Функція для переходу до наступного елементу
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= totalItems - visibleItems ? prevIndex : prevIndex + visibleItems
        );
    };

    //мапимо об'єкт в змінну
    const visibleHats = hatsData.map((hat, index) => (
        <StoreClothesHatsItem hat={hat} key={index} />
    ));

    // Умова для відключення кнопок
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= totalItems - visibleItems;

    return (
        <div className={`${isExpanded ? 'store-hats__container--expanded' : 'store-hats__container'}`}>

            {/*кнопки каруселі*/}
            {!isExpanded
                && (
                <>
                    <button
                        onClick={goToPrevious}
                        disabled={isAtStart}
                    >
                        Previous
                    </button>
                    <button
                        onClick={goToNext}
                        disabled={isAtEnd}
                    >
                        Next
                    </button>
                </>
            )}

            {/*блок з картками*/}
            <div className={`${isExpanded ? 'store-hats__list--expanded' : 'store-hats__list'}`}>
                <div
                    className={`${isExpanded ? 'store-hats__list-wrapper--expanded' : 'store-hats__list-wrapper'}`}
                    style={{ transform: isExpanded ? 'none' : `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {visibleHats}
                </div>
            </div>

        </div>
    );
};

export default StoreClothesHats;