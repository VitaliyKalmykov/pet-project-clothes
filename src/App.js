import React, {useState, useEffect} from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modals/Modal";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import {ThemeProvider} from "./ThemeContext/ThemeContext";
import clickSound from '../src/assets/audio/click.mp3'


function App() {

    const [isModal, setIsModal] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [isModalArr, setIsModalArr] = useState([]);

    useEffect(() => {
        const handleClick = () => {
            const audio = new Audio(clickSound);
            audio.play(); // Відтворюємо звук при кліку
        };

        // Додаємо глобальний обробник кліку
        window.addEventListener("click", handleClick);

        // Очищаємо обробник події при демонтажі компонента
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);


    return (
        <>
            <ThemeProvider>
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
            </ThemeProvider>
        </>
  );
}

export default App;
