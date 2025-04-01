import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Store from "./Sections/Store section/Store";
import Details from "./Sections/Details section/Details";
import OfflineStores from "./Sections/Offline section/OfflineStores";
import Contact from "./Sections/Contact section/Contact";

const Main = ({ isModalArr, setIsModalArr }) => {
    const { theme } = useContext(ThemeContext);
    const location = useLocation();

    return (
        <main>
            <motion.div
                key={location.key}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <Routes location={location}>
                    <Route path="/" element={<Navigate to="/Store" />} />
                    <Route path="/Store" element={<Store isModalArr={isModalArr} setIsModalArr={setIsModalArr} />} />
                    <Route path="/Details" element={<Details />} />
                    <Route path="/OfflineStores" element={<OfflineStores />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </motion.div>

            {/* Фонове відео */}
            <div className="video-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={theme === "dark" ? "active" : "hidden"}
                >
                    <source src="/assets/backgrounds/body_background_dark.mp4" type="video/mp4" />
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={theme === "light" ? "active" : "hidden"}
                >
                    <source src="/assets/backgrounds/body_background_white.mp4" type="video/mp4" />
                </video>
            </div>
        </main>
    );
};

export default Main;