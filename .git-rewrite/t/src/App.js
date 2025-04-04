import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modals/Modal";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";


function App() {

    const [isModal, setIsModal] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [isModalArr, setIsModalArr] = useState([]);

    return (
        <>
           <Router>
               <Header setIsModal={setIsModal} setModalType={setModalType} />
               <Main
                   isModalArr={isModalArr}
                   setIsModalArr={setIsModalArr}
               />
           </Router>
           {isModal && <Modal
               setIsModal={setIsModal}
               modalType={modalType}
               isModalArr={isModalArr}
               setIsModalArr={setIsModalArr}
           />}
        </>
  );
}

export default App;
