import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modals/Modal";

function App() {

    const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Header setIsModal={setIsModal} />
        {isModal && <Modal setIsModal={setIsModal}/>}
    </>
  );
}

export default App;
