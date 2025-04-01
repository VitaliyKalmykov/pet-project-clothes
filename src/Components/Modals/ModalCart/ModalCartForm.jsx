import React, { useState } from 'react';
import TextInput from "../../UI/TextInput";
import CheckboxInput from "../../UI/CheckboxInput";
import TextareaInput from "../../UI/TextareaInput";
import RadioInput from "../../UI/RadioInput";
import ModalSuccess from "../ModalSuccess";

const ModalCartForm = ({ isModalArr, formRef, setDeliveryMethod,  isFormSubmitted }) => {


//інпути форми
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userMessage: '',
        dataProcessing: false,
        deliveryMethod: ''
    });

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);


    //помилки при валідації
    const [errors, setErrors] = useState({});

    //валідація
    const validate = () => {
        let newErrors = {};

        if(!formData.userName.trim()) {
            newErrors.userName = 'Name is required';
        }
        if (!formData.userEmail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            newErrors.userEmail = "Please enter an existing email address";
        }
        if (!formData.userPhone.match(/^(\+380\d{9}|0\d{9})$/)) {
            newErrors.userPhone = "*+380XXXXXXXXX";
        }
        if (!formData.dataProcessing) {
            newErrors.dataProcessing = "Please accept data processing";
        }
        if(!formData.deliveryMethod) {
            newErrors.deliveryMethod = "Choose delivery method";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    //доставка
    const deliveryMethod = [
        {
            value: 'self-delivery', label: 'Self-Delivery',
        },
        {
            value: 'courier-delivery', label: 'Courier-delivery(+$20)',
        }
    ]

    //двостороннє зв'язування
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (name === "deliveryMethod") {
            setDeliveryMethod(value); // Оновлюємо метод доставки у батьківському компоненті
        }
    };

    // Сабміт
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('work')
        if (validate()) {

            // Обчислення загальної суми товарів без доставки
            const totalOrderPrice = isModalArr.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

            // Визначаємо ціну доставки
            const deliveryPrice = formData.deliveryMethod === 'courier-delivery' ? 20 : 0;

            // Загальна сума замовлення з доставкою
            const finalOrderPrice = (totalOrderPrice + deliveryPrice).toFixed(2);

            const formDataToSend = {

                //ім'я юзера
                userName: formData.userName,

                //мейл юзера
                userEmail: formData.userEmail,

                //телефон юзера
                userPhone: formData.userPhone,

                //повідомлення юзера
                userMessage: formData.userMessage,

                //спосіб доставки
                deliveryMethod: formData.deliveryMethod,

                //згодка на обробку данних
                dataProcessing: formData.dataProcessing,

                //товари замовленя
                cartItems: isModalArr.map(item => (
                    {
                        name: item.name,
                        price: item.price,
                    }
                )),
                 //уся сума заказу
                finalOrderPrice: finalOrderPrice, // Сума з доставкою

            };
            // Надсилаємо форму на Formspree
            fetch('https://formspree.io/f/xkgjnaov', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            })
                .then((response) => {
                    if (response.ok) {
                        setIsSuccessModalOpen(true);
                    } else {
                        console.log("There was an issue with the form submission");
                    }
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                });
        }
    };

    return (
        <>
            {isModalArr.length > 0 ? (
                <div className={'modal-cart__form-container'}>
                    <form ref={formRef} onSubmit={onSubmit} className={'modal-cart__form'}>
                        {isSuccessModalOpen && <ModalSuccess isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />}
                        <div className={'modal-cart__form-input-wrapper'}>
                            <TextInput name="userName" value={formData.userName} onChange={handleChange} label="Name" />
                            {errors.userName && <p className="modal__error">{errors.userName}</p>}
                        </div>
                        <div className={'modal-cart__form-input-wrapper'}>
                            <TextInput name="userEmail" value={formData.userEmail} onChange={handleChange} label="Email" type="email" />
                            {errors.userEmail && <p className="modal__error">{errors.userEmail}</p>}
                        </div>
                        <div className={'modal-cart__form-input-wrapper'}>
                            <TextInput name="userPhone" value={formData.userPhone} onChange={handleChange} label="Phone" type="tel" />
                            {errors.userPhone && <p className="modal__error">{errors.userPhone}</p>}
                        </div>
                        <div className={'modal-cart__form-input-wrapper'}>
                            <TextareaInput title={'Describe your request here:'} name="userMessage" value={formData.userMessage} onChange={handleChange} maxLength={250} />
                        </div>
                        <div className={'modal-cart__form-input-wrapper'}>
                            <RadioInput name="deliveryMethod" options={deliveryMethod} selectedValue={formData.deliveryMethod} onChange={handleChange} />
                            {errors.deliveryMethod && <p className= "modal__error">{errors.deliveryMethod}</p>}

                        </div>
                        <div className={'modal-cart__form-input-wrapper'}>
                            <CheckboxInput name="dataProcessing" id={"dataProcess"} checked={formData.dataProcessing} onChange={handleChange} label="I agree to data processing" />
                            {errors.dataProcessing && <p className="modal__error">{errors.dataProcessing}</p>}
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    );
};

export default ModalCartForm;
