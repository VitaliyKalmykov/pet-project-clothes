import React, { useState, useEffect } from 'react';
import Button from "../../../../UI/Button";

const StoreModal = ({ isItemModalOpen, isModalItem, setIsItemModalOpen, setIsModalArr, isModalArr }) => {

    //відрисовка головної картинки в модалкє
    const [selectedImg, setSelectedImg] = useState(isModalItem?.images.front);

    //вибір розміру
    const [selectedSize, setSelectedSize] = useState('');  // Додано для вибору розміру


    // Оновлюємо selectedImg при зміні товару
    useEffect(() => {
        if (isModalItem) {
            setSelectedImg(isModalItem.images.front);
            setSelectedImg(isModalItem.images.front);
            const existingItem = isModalArr.find((item) => item.name === isModalItem.name);
            if (existingItem) {
                setSelectedSize(existingItem.selectedSize);  // Якщо товар в кошику, встановлюємо розмір
            } else {
                setSelectedSize('');  // Якщо товар не в кошику, скидаємо вибір розміру
            }
        }
    }, [isModalItem, isModalArr]);

    if (!isItemModalOpen || !isModalItem) return null;

    function addItemToCart() {

        if (isModalItem.sizes && !selectedSize) {
            alert("Please select a size.");  // Перевірка, якщо є розміри, але вони не вибрані
            return;
        }

        setIsModalArr((prev) => {
            const existingItem = prev.find((item) => item.name === isModalItem.name);

            if (existingItem) {
                return prev.map((item) =>
                    item.name === isModalItem.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...isModalItem, quantity: 1, selectedSize }];
            }
        });
    }

    // Видаляємо товар з кошика
    function removeItemFromCart() {
        setIsModalArr((prev) => prev.filter((item) => item.name !== isModalItem.name));
    }

    // Перевірка чи товар вже в кошику
    const isItemInCart = isModalArr.some((item) => item.name === isModalItem.name);
    const existingItem = isModalArr.find((item) => item.name === isModalItem.name);
    const itemSizeInCart = existingItem ? existingItem.selectedSize : null;



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

                    {/* Вибір розміру, якщо він є */}
                    {isModalItem.sizes && isModalItem.sizes.length > 0 && (
                        <div className="store-modal__size-selector">
                            <p>Select size:</p>
                            <div className="store-modal__size-selector-items">
                                {isModalItem.sizes.map((size) => (
                                    <Button
                                        key={size}
                                        className={`store-modal__size-button ${size === selectedSize ? 'selected' : ''}`}
                                        onClick={() => {
                                            if (!isItemInCart) {
                                                setSelectedSize(size);
                                            }
                                        }}
                                        disabled={isItemInCart && size !== itemSizeInCart}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

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
