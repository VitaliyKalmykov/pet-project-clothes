import React, { useState } from 'react';
import hatsData from './hatsData';
import StoreClothesHatsItem from './StoreClothesHatsItem';

const StoreClothesHats = () => {
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

    const visibleHats = hatsData.map((hat, index) => (
        <StoreClothesHatsItem hat={hat} key={index} />
    ));

    // Умова для відключення кнопок
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= totalItems - visibleItems;

    return (
        <div className="store__hats-container">
            <button
                onClick={goToPrevious}
                disabled={isAtStart}  // Вимикаємо кнопку, якщо це перший слайд
            >
                Previous
            </button>
            <div className="store__hats-list">
                <div
                    className="store__hats-list-wrapper"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {visibleHats}
                </div>
            </div>
            <button
                onClick={goToNext}
                disabled={isAtEnd}  // Вимикаємо кнопку, якщо це останній слайд
            >
                Next
            </button>
        </div>
    );
};

export default StoreClothesHats;