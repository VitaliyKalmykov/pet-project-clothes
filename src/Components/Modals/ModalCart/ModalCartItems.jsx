import React, {useState} from 'react';
import Button from "../../UI/Button";
import StoreModal from "../../Main/Sections/Store section/Modals/StoreModal";

const ModalCartItems = ({isModalArr, setIsModalArr, handleSubmit, deliveryMethod}) => {

    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Відкриття модалки при кліку на картинку
    const openStoreModal = (item) => {
        setSelectedItem(item);
        setIsItemModalOpen(true);
    };

    // Видалення товару з кошика
    const removeItemFromCart = (name) => {
        setIsModalArr((prev) => prev.filter((item) => item.name !== name));
    };

    //ціна без доставки
    const finalPriceWithoutDelivery = isModalArr.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);
    //обробка доставки до ціни
    const deliveryPrice = deliveryMethod === 'courier-delivery' ? 20 : 0;
    //ціна
    const finalPrice = (parseFloat(finalPriceWithoutDelivery) + deliveryPrice).toFixed(2);

    return (
        <div className={'modal-cart__list-container'}>
            {isModalArr.length > 0 ? (
                <>
                    <ul className="modal-cart__list">
                        {isModalArr.map((item) => (
                            <li key={item.name} className="modal-cart__item">
                                <img
                                    src={item.images.front}
                                    alt={item.name}
                                    className="modal-cart__img"
                                    onClick={() => openStoreModal(item)} // Клік для відкриття модалки
                                />
                                <div className="modal-cart__info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    {/* Відображення розміру, якщо він вибраний */}
                                    {item.selectedSize && (
                                        <p className="modal-cart__size">Size: {item.selectedSize}</p>
                                    )}
                                    <Button onClick={() => removeItemFromCart(item.name)} className="modal-cart__remove">
                                        Remove
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className={'modal-cart__final-price'}>Final price:${finalPrice}</p>
                    <Button onClick={handleSubmit} className="modal-cart__checkout">Make an order</Button>
                </>
            ) : (
                <p className="modal-cart__empty">Your cart is empty</p>
            )}

            {/* Передаємо в StoreModal вибраний товар */}
            {selectedItem && (
                <StoreModal
                    isItemModalOpen={isItemModalOpen}
                    isModalItem={selectedItem}
                    setIsItemModalOpen={setIsItemModalOpen}
                    setIsModalArr={setIsModalArr}
                    isModalArr={isModalArr}
                />
            )}

        </div>
    );
};

export default ModalCartItems;