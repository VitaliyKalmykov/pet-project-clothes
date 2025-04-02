import React, { useState, useEffect } from 'react';

const MainLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setInterval(() => {
            setSeconds((prev) => (prev > 1 ? prev - 1 : 0));
        }, 1000);

        const timeout = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = '';
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
            document.body.style.overflow = '';
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="main-loader">
            <h1 className={'main-loader__title'}>Style is the silent language of confidence, whispering elegance in every detail.</h1>
            <h2 className={'main-loader__text'}>Loading, please wait...</h2>
            <h3 className={'main-loader__counter'}>{seconds}</h3>
            <div className="spinner"></div>
        </div>
    );
};

export default MainLoader;
