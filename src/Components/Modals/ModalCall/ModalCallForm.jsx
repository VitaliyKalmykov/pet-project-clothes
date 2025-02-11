import React from 'react';
import TextInput from "../../UI/TextInput";
import Button from "../../UI/Button";

const ModalCallForm = () => {
    return (
        <form className="modal__call-form">
            <TextInput id={'name'} name={'userName'} label={'Name'} type={'text'}/>
            <TextInput id={'mail'} name={'userEmail'} label={'Email'} type={'email'}/>
            <TextInput id={'phone'} name={'userPhone'} label={'Phone'} type={'tel'}/>
            <div className={"modal__call-form__textarea-container"}>
                <p>Describe your request here:</p>
                <textarea className="modal__call-form__textarea"></textarea>
            </div>
         <div className="modal__call-form__checkbox-container">
             <input type="checkbox" id="data_processing" name="data_processing"/>
             <label htmlFor={"data_processing"}>I consent to the processing of my personal data </label>
         </div>
            <Button type={"submit"} className={"button"}>Send!</Button>
        </form>
    );
};

export default ModalCallForm;