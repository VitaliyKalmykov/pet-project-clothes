import React, {useRef} from "react";
import ModalCartItems from "./ModalCartItems";
import ModalCartForm from "./ModalCartForm";

const ModalCart = ({ isModalArr, setIsModalArr }) => {

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
                        isModalArr={isModalArr}
                        setIsModalArr={setIsModalArr}
                        handleSubmit={handleSubmit}
                    />
                    <ModalCartForm
                        isModalArr={isModalArr}
                        formRef={formRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalCart;