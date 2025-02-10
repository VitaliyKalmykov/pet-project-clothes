import React from 'react';
import TextInput from "../../UI/textInput";

const ModalCallForm = () => {
    return (
        <form className="modal__call-form">
            <TextInput id={'name'} name={'userName'} label={'Name'} type={'text'}/>
            <TextInput id={'mail'} name={'userEmail'} label={'Email'} type={'email'}/>
            <TextInput id={'phone'} name={'userPhone'} label={'Phone'} type={'tel'}/>
        </form>
    );
};

export default ModalCallForm;