import React, { useState } from 'react';
import TextInput from "../../UI/TextInput";
import CheckboxInput from "../../UI/CheckboxInput";
import TextareaInput from "../../UI/TextareaInput";
import RadioInput from "../../UI/RadioInput";

const ModalCartForm = ({ isModalArr, formRef }) => {

    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userMessage: '',
        dataProcessing: false,
        deliveryMethod: ''
    });

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
    };

    // Сабміт
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('work')
        if (validate()) {
            console.log("Form submitted", formData);
        }
    };

    return (
        <>
            {isModalArr.length > 0 ? (
                <div className={'modal-cart__form-container'}>
                    <form ref={formRef} onSubmit={onSubmit} className={'modal-cart__form'}>
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
                            <TextareaInput name="userMessage" value={formData.userMessage} onChange={handleChange} maxLength={250} />
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
