import React from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import { motion } from "framer-motion";
import Store from "./Sections/Store section/Store";
import Details from "./Sections/Details section/Details";
import OfflineStores from "./Sections/Offline section/OfflineStores";
import CustomOrder from "./Sections/Custom section/CustomOrder";
import Contact from "./Sections/Contact section/Contact";

const Main = ({isModalArr, setIsModalArr}) => {

    const location = useLocation();

    return (
        <main>
            <motion.div
                key={location.key} // використовується для відстеження унікальних маршрутів
                initial={{ opacity: 0, x: 100 }} // Початковий стан: зсув з правого боку
                animate={{ opacity: 1, x: 0 }}    // Під час анімації: на місці
                exit={{ opacity: 0, x: -100 }}    // Коли елемент зникає: зсув вліво
                transition={{ duration: 0.5 }}    // Тривалість анімації
            >
                <Routes location={location}>
                    <Route path="/" element={<Navigate to="/Store" />} /> {/* Перенаправляє на /Store */}
                    <Route path="/Store" element={<Store isModalArr={isModalArr} setIsModalArr={setIsModalArr} />} />
                    <Route path="/Details" element={<Details />} />
                    <Route path="/OfflineStores" element={<OfflineStores />} />
                    <Route path="/CustomOrder" element={<CustomOrder />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </motion.div>
        </main>
    );
};

export default Main;