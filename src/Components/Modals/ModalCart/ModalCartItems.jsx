import React from 'react';
import Button from "../../UI/Button";

const ModalCartItems = ({isModalArr, setIsModalArr}) => {

    // Видалення товару з кошика
    const removeItemFromCart = (name) => {
        setIsModalArr((prev) => prev.filter((item) => item.name !== name));
    };

    return (
        <div className={'modal-cart__list-container'}>
            {isModalArr.length > 0 ? (
                <>
                    <ul className="modal-cart__list">
                        {isModalArr.map((item) => (
                            <li key={item.name} className="modal-cart__item">
                                <img src={item.images.front} alt={item.name} className="modal-cart__img" />
                                <div className="modal-cart__info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <Button onClick={() => removeItemFromCart(item.name)} className="modal-cart__remove">
                                        Remove
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button className="modal-cart__checkout">Make an order</Button>
                </>
            ) : (
                <p className="modal-cart__empty">Your cart is empty</p>
            )}
        </div>
    );
};

export default ModalCartItems;