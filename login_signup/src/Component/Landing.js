import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [textArray, setTextArray] = useState([
        "Capture your thoughts and ideas with ease. Never forget a great idea again!",
        "Organize your life, one note at a time.",
        "Keep your thoughts in one place, and let us take care of the rest.",
        "Get organized and stay productive with our note-taking app.",
        "Say goodbye to scattered notes and hello to organized productivity.",
        "Create, edit, and share notes on the go with our user-friendly app.",
        "Take control of your day with our note-taking tool, designed to simplify your life."
    ]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentTextIndex < textArray.length - 1) {
                setCurrentTextIndex(currentTextIndex + 1);
            } else {
                setCurrentTextIndex(0);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentTextIndex, textArray.length]);


    return (
        <div className='landing-page dark-mode'>
            <div className="header">
                <h1>Welcome to Your Website</h1>
            </div>
            <div className="intro">
                <h1>{textArray[currentTextIndex]}</h1>
                <p>
                    Our platform provides an easy and efficient way to store and organize your notes online. Whether you're a student, a professional, or just someone who likes to keep track of their thoughts, our website is the perfect tool for you.
                    With our user-friendly interface, you can create, edit, and organize your notes with just a few clicks. You can also categorize your notes and search for them by keywords, making it easier to find the information you need.
                    Our website is accessible from any device with an internet connection, so you can access your notes from anywhere, at any time. We also ensure that all your data is encrypted and secure, so you can store your notes with peace of mind.
                </p>
            </div>
        </div>
    );
}

export default LandingPage;