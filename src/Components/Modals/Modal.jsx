import React from 'react';
import ModalCall from "./ModalCall/ModalCall";
import ModalCart from "./ModalCart/ModalCart";

const Modal = ({setIsModal, modalType, isModalArr, setIsModalArr}) => {
    return (
        <div className="modal" onClick={() =>
            setIsModal(false)
        }>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                {modalType === 'call'
                    ?
                    <ModalCall />
                    :
                    modalType === 'cart'
                        ?
                        <ModalCart
                            setIsModalArr={setIsModalArr}
                            isModalArr={isModalArr} />
                        :
                        null
                }
                <button onClick={() => setIsModal(false)} type={"button"} className={"modal__btn-close"}>
                    ✖
                </button>
            </div>
        </div>
    );
};

export default Modal;