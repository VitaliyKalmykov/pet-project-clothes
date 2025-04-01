import React from 'react';
import Button from "../UI/Button";

const ModalSuccess = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal-success')) {
            onClose();
        }
    };

    return (
        <div className="modal modal-success" onClick={handleClickOutside}>
            <div className="modal__container modal-success__container" onClick={(e) => e.stopPropagation()}>
                <p>Thank you for your request! We will contact you shortly.</p>
                <Button className={'modal-success__button'} onClick={onClose}>OK</Button>
            </div>
        </div>
    );
};

export default ModalSuccess;