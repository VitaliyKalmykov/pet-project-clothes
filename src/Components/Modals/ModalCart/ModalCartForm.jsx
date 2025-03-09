import React, { useState } from 'react';
import TextInput from "../../UI/TextInput";
import CheckboxInput from "../../UI/CheckboxInput";
import TextareaInput from "../../UI/TextareaInput";
import RadioInput from "../../UI/RadioInput";

const ModalCartForm = ({ isModalArr }) => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userMessage: '',
        dataProcessing: false,
        deliveryMethod: ''
    });

    const deliveryMethod = [
        {
            value: 'self-delivery', label: 'Self-Delivery',
        },
        {
            value: 'courier-delivery', label: 'Courier-delivery(+$20)',
        }
    ]

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <>
            {isModalArr.length > 0 ? (
                <div className={'modal-cart__form-container'}>
                    <form className={'modal-cart__form'}>
                        <TextInput name="userName" value={formData.userName} onChange={handleChange} label="Name" />
                        <TextInput name="userEmail" value={formData.userEmail} onChange={handleChange} label="Email" type="email" />
                        <TextInput name="userPhone" value={formData.userPhone} onChange={handleChange} label="Phone" type="tel" />
                        <TextareaInput name="userMessage" value={formData.userMessage} onChange={handleChange} maxLength={250} />
                        <RadioInput name="deliveryMethod" options={deliveryMethod} selectedValue={formData.deliveryMethod} onChange={handleChange} />
                        <div>
                            <CheckboxInput name="dataProcessing" checked={formData.dataProcessing} onChange={handleChange} label="I agree to data processing" />
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    );
};

export default ModalCartForm;
