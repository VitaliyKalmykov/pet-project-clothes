import React from "react";
import ModalCartItems from "./ModalCartItems";
import ModalCartForm from "./ModalCartForm";

const ModalCart = ({ isModalArr, setIsModalArr }) => {

    return (
        <div className="modal-cart">
            <div className="modal-cart__container">
                    <h2 className="modal-cart__title">Shopping Cart</h2>
                <div className={'modal-cart__wrapper'}>
                    <ModalCartItems isModalArr={isModalArr} setIsModalArr={setIsModalArr} />
                    <ModalCartForm isModalArr={isModalArr} />
                </div>
            </div>
        </div>
    );
};

export default ModalCart;