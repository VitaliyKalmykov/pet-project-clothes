import React from "react";
import Button from "../../UI/Button";

const ModalCart = ({ isModalArr, setIsModalArr }) => {

    // Видалення товару з кошика
    const removeItemFromCart = (id) => {
        setIsModalArr((prev) => prev.filter((item) => item.id !== id));
    };

    console.log(isModalArr)

    return (
        <div className="modal-cart">
            <div className="modal-cart__container">
                <h2 className="modal-cart__title">Shopping Cart</h2>

                {isModalArr.length > 0 ? (
                    <>
                    <ul className="modal-cart__list">
                        {isModalArr.map((item) => (
                            <li key={item.id} className="modal-cart__item">
                                <img src={item.images.front} alt={item.name} className="modal-cart__img" />
                                <div className="modal-cart__info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <Button onClick={() => removeItemFromCart(item.id)} className="modal-cart__remove">
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
        </div>
    );
};

export default ModalCart;