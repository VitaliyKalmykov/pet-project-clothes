import React, {useEffect} from 'react';
import ModalCall from "./ModalCall/ModalCall";
import ModalCart from "./ModalCart/ModalCart";
import clickSound from '../../assets/audio/click.mp3'

const Modal = ({setIsModal, modalType, isModalArr, setIsModalArr}) => {

    const playClickSound = () => {
        const audio = new Audio(clickSound);
        audio.play(); // Відтворюємо звук при кліку
    };

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
        <div className="modal" onClick={(e) => {
            playClickSound(); // Додаємо звук на клік по зовнішньому блоку
            setIsModal(false);
            e.stopPropagation();
        }}>
            <div className="modal__container" onClick={(e) => {
                e.stopPropagation(); // Не даємо події поширюватися на зовнішній блок
                playClickSound(); // Додаємо звук при кліку всередині модалки
            }}>
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