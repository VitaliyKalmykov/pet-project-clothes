import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modals/Modal";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";


function App() {

    const [isModal, setIsModal] = useState(false);

    return (
        <>
           <Router>
               <Header setIsModal={setIsModal} />
               <Main/>
           </Router>
           {isModal && <Modal setIsModal={setIsModal}/>}
        </>
  );
}

export default App;
