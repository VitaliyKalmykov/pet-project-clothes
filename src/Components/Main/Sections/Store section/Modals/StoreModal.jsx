import React, { useState, useEffect } from 'react';
import Button from "../../../../UI/Button";

const StoreModal = ({ isItemModalOpen, isModalItem, setIsItemModalOpen, setIsModalArr, isModalArr }) => {
    const [selectedImg, setSelectedImg] = useState(isModalItem?.images.front);

    // Оновлюємо selectedImg при зміні товару
    useEffect(() => {
        if (isModalItem) {
            setSelectedImg(isModalItem.images.front);
        }
    }, [isModalItem]);

    if (!isItemModalOpen || !isModalItem) return null;

    function addItemToCart() {
        setIsModalArr((prev) => {
            const existingItem = prev.find((item) => item.name === isModalItem.name);

            if (existingItem) {
                return prev.map((item) =>
                    item.name === isModalItem.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...isModalItem, quantity: 1 }];
            }
        });
    }

    // Видаляємо товар з кошика
    function removeItemFromCart() {
        setIsModalArr((prev) => prev.filter((item) => item.name !== isModalItem.name));
    }

    // Перевірка чи товар вже в кошику
    const isItemInCart = isModalArr.some((item) => item.name === isModalItem.name);


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
                    {/* Кнопка Add to cart або Remove */}
                    {isItemInCart ? (
                        <Button onClick={removeItemFromCart} className="button store-modal__remove">
                            Remove from cart
                        </Button>
                    ) : (
                        <Button onClick={addItemToCart} className="button store-modal__add">
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoreModal;
