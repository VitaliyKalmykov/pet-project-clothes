import React, { useState, useEffect } from 'react';
import Button from "../../../../UI/Button";

const StoreModal = ({ isItemModalOpen, isModalItem, setIsItemModalOpen }) => {
    const [selectedImg, setSelectedImg] = useState(isModalItem?.images.front);

    // Оновлюємо selectedImg при зміні товару
    useEffect(() => {
        if (isModalItem) {
            setSelectedImg(isModalItem.images.front);
        }
    }, [isModalItem]);

    if (!isItemModalOpen || !isModalItem) return null;

    return (
        <div className="store-modal">
            <div className="store-modal__overlay" onClick={() => setIsItemModalOpen(false)}></div>
            <div className="store-modal__container">
                <Button type={'button'} className="store-modal__close" onClick={() => setIsItemModalOpen(false)}>
                    &times;
                </Button>

                {/* Ліва частина: велике зображення + галерея */}
                <div className="store-modal__image-section">
                    <img className="store-modal__img-large" src={selectedImg} alt={isModalItem.name} />
                    <div className="store-modal__thumbnails">
                        {Object.values(isModalItem.images).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Thumbnail"
                                className={`store-modal__thumbnail ${selectedImg === img ? 'store-modal__thumbnail--active' : ''}`}
                                onClick={() => setSelectedImg(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Права частина: інформація про товар */}
                <div className="store-modal__info">
                    <h2 className="store-modal__title">{isModalItem.name}</h2>
                    <p className="store-modal__price">${isModalItem.price}</p>
                    <p className="store-modal__description">{isModalItem.description}</p>
                    <p>Composition: {isModalItem.composition}</p>
                    <Button className="button store-modal__button">Add to cart</Button>
                </div>
            </div>
        </div>
    );
};

export default StoreModal;
