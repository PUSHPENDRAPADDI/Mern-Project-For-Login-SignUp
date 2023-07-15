import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [textArray, setTextArray] = useState([
        "Organize your thoughts with our intuitive notes website",
        "Capture ideas effortlessly on our user-friendly notes site",
        "Boost productivity with our streamlined notes platform",
        "Stay organized with our feature-rich note-taking website",
        "Efficiently manage your tasks with our online notes tool",
        "Easily collaborate on notes with our cloud-based site",
        "Access your notes anytime, anywhere with our web platform"
    ]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [showTextFlag, setShowTextFlag] = useState(false);

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
        <div className='landing-page'>
            <div className="header">
                <h1>Welcome to Your Website</h1>
            </div>
            <div className="intro">
                <h1>{textArray[currentTextIndex]}</h1>
                {showTextFlag ?
                    <p>
                        Our platform provides an easy and efficient way to store and organize your notes online. Whether you're a student, a professional, or just someone who likes to keep track of their thoughts, our website is the perfect tool for you.
                        With our user-friendly interface, you can create, edit, and organize your notes with just a few clicks. You can also categorize your notes and search for them by keywords, making it easier to find the information you need.
                        Our website is accessible from any device with an internet connection, so you can access your notes from anywhere, at any time. We also ensure that all your data is encrypted and secure, so you can store your notes with peace of mind.
                    </p> : <button className="btn btn-primary" onClick={() => setShowTextFlag(true)}>Read More</button>}

            </div>
        </div>
    );
}

export default LandingPage;