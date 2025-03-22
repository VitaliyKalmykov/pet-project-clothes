import React from 'react';
import ModalCallForm from "./ModalCallForm";

const ModalCall = () => {
    return (
        <div>
          <div className="modal__call-text-container">
              <h2>Have a questions ?</h2>
              <h3>Fill out the form and we will contact you shortly:</h3>
          </div>
             <ModalCallForm/>
        </div>
    );
};

export default ModalCall;