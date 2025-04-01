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
    const [isLoading, setIsLoading] = useState(true); // Стейт для завантаження


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

    useEffect(() => {
        const loadAssets = async () => {
            // Ваші асинхронні завдання
            setIsLoading(false);
        };

        loadAssets();
    }, []);


    return (
        <>
            {isLoading ? ( // Показуємо індикатор завантаження
                <div className="loading-spinner">
                    Please, be patient, I'm just an amateur developer with no servers so it will take time.
                    {/* Тут можна додати спінер або інший індикатор */}
                </div>
            ) : (
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
            )}
        </>
    );
}


export default App;
