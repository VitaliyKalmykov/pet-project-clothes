import React, {useEffect} from 'react';
import ModalCall from "./ModalCall/ModalCall";
import ModalCart from "./ModalCart/ModalCart";

const Modal = ({setIsModal, modalType, isModalArr, setIsModalArr}) => {

    useEffect(() => {
        if(modalType) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [modalType]);

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
                            isModalArr={isModalArr}
                            setIsModal={setIsModal}
                        />
                        :
                        null
                }
                {modalType === 'call' ? <button onClick={() => setIsModal(false)} type={"button"} className={"modal__btn-close"}>
                    ✖
                </button> : null}
            </div>
        </div>
    );
};

export default Modal;