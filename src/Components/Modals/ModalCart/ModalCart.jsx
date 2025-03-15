import React, {useRef, useState} from "react";
import ModalCartItems from "./ModalCartItems";
import ModalCartForm from "./ModalCartForm";

const ModalCart = ({ isModalArr, setIsModalArr, setIsModal }) => {

    //успішний сабміт форми
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    //частина доставки
    const [deliveryMethod, setDeliveryMethod] = useState(null);

    //лінк на форму для кнопки
    const formRef = useRef(null);

    // Сабміт форми
    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.requestSubmit(); // Викликає стандартний submit форми
            console.log('work')
        }
    };

    return (
        <div className="modal-cart">
            <div className="modal-cart__container">
                    <h2 className="modal-cart__title">Shopping Cart</h2>
                <div className={'modal-cart__wrapper'}>
                    <ModalCartItems
                        deliveryMethod={deliveryMethod}
                        isModalArr={isModalArr}
                        setIsModalArr={setIsModalArr}
                        handleSubmit={handleSubmit}
                    />
                    <ModalCartForm
                        setIsFormSubmitted={setIsFormSubmitted}
                        setDeliveryMethod={setDeliveryMethod}
                        isModalArr={isModalArr}
                        formRef={formRef}
                        isFormSubmitted={isFormSubmitted}
                    />
                </div>
                <button onClick={() => setIsModal(false)} type={"button"} className={"modal__btn-close"}>
                    ✖
                </button>
            </div>
        </div>
    );
};

export default ModalCart;