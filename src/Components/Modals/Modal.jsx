import React from 'react';
import ModalCall from "./ModalCall/ModalCall";
import Button from "../UI/Button";

const Modal = ({setIsModal}) => {
    return (
        <div className="modal" onClick={() =>
            setIsModal(false)
        }>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                <ModalCall/>
                <button onClick={() => setIsModal(false)} type={"button"} className={"modal__btn-close"}>
                    ✖
                </button>
            </div>
        </div>
    );
};

export default Modal;