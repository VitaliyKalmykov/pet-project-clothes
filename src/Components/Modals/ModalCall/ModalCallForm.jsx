import React, {useState} from 'react';
import TextInput from "../../UI/TextInput";
import Button from "../../UI/Button";

const ModalCallForm = () => {

    //Стан для форми
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userMessage: '',
        dataProcessing: false,
    })

    //Об'єкт з помилками у разі не проходження валідації
    const [errors, setErrors] = useState({});

    //перевірка чи надіслана форма
    const [formSubmitted, setFormSubmitted] = useState(false);

    //Функція для контрольованих інпутів
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    //Валідація
    const validate = () => {
        let newErrors = {};

        if (!formData.userName.trim()) {
            newErrors.userName = "Name is required";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.userEmail)) {
            newErrors.userEmail = "Invalid email";
        }

        const phonePattern = /^\+380\d{9}$/;
        if (!phonePattern.test(formData.userPhone)) {
            newErrors.userPhone = "Format: +380XXXXXXXXX";
        }

        if (!formData.dataProcessing) {
            newErrors.dataProcessing = "You must accept the terms";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //сабміт
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        const response = await fetch('https://formspree.io/f/mwpvnano', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData), // Надсилаємо дані форми
        });

        if (response.ok) {
            setFormSubmitted(true); // Успішна відправка
        }
    };


    //JSX
    return (
        <>
        {formSubmitted ? (
                <div className="form-success-message">
                    <p>Form successfully submitted!</p>
                    <p>We will contact you soon.</p>
                </div>
            ) : (
        <form
            className="modal__call-form"
            action={"https://formspree.io/f/mwpvnano"}
            method={"POST"}
            data-replace="true"
            onSubmit={handleSubmit}
        >

            {/*Текстові інпути*/}
            <div className={"modal__call-form__text-input-container"}>
               <TextInput
                   onChange={handleChange}
                   value={formData.userName}
                   id={'name'}
                   name={'userName'}
                   label={'Name'}
                   type={'text'}
               />
               {errors.userName && <span className="modal__call-form__error">{errors.userName}</span>}
           </div>
           <div className={"modal__call-form__text-input-container"}>
               <TextInput
                   onChange={handleChange}
                   value={formData.userEmail}
                   id={'mail'}
                   name={'userEmail'}
                   label={'Email'}
                   type={'email'}
               />
               {errors.userEmail && <span className="modal__call-form__error">{errors.userEmail}</span>}
           </div>
           <div className={"modal__call-form__text-input-container"}>
               <TextInput
                   onChange={handleChange}
                   value={formData.userPhone}
                   id={'phone'}
                   name={'userPhone'}
                   label={'Phone'}
                   type={'tel'}
               />
               {errors.userPhone && <span className="modal__call-form__error">{errors.userPhone}</span>}
           </div>

            {/*Текст арєа*/}
            <div className={"modal__call-form__textarea-container"}>
                <p>Describe your request here:</p>
                <textarea
                    name="userMessage"
                    value={formData.userMessage}
                    onChange={handleChange}
                    maxLength={"240"}
                    className="modal__call-form__textarea"></textarea>
                <span
                    style={{
                        color: formData.userMessage.length === 240 ? 'red' : 'inherit',
                    }}
                >{formData.userMessage.length}/240</span>
            </div>


           {/*Чєкбокс*/}
            <div className={'modal__call-form__checkbox-container'}>
           <div className="modal__call-form__checkbox-wrapper">
               <input
                   onChange={handleChange}
                   checked={formData.dataProcessing}
                   type="checkbox"
                   id="dataProcessing"
                   name="dataProcessing"
               />
               <label htmlFor={"dataProcessing"}>I consent to processing my personal data </label>
           </div>
           {errors.dataProcessing && <span className="modal__call-form__error">
                 {errors.dataProcessing}
             </span>
           }
       </div>

            {/*Сабміт кнопка*/}
            <Button type={"submit"} className={"button"}>Send!</Button>
        </form>
            )}
        </>
    );
};

export default ModalCallForm;