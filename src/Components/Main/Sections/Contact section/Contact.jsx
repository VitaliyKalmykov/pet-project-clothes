import React from 'react';
import ContactsItems from "./ContactsItems";

const Contact = () => {
    return (
        <section className={'contact'}>
            <div className={'container'}>
                <h2 className={'contact__title'}>Feel free to text us any time !</h2>
                <ContactsItems/>
            </div>
        </section>
    );
};

export default Contact;