import React, { useEffect, useState } from 'react';
import '../Style/Style.css';
// import Typical from 'react-typical'
import logo from '../Assests/logo.png';

function LoadingPage() {
    const [textProgress, setTextProgress] = useState("📝");
    const Data = "Let's store your Notes Here"
    let index = 0;
    useEffect(() => {
        setInterval(() => {
            showNextLetter();
        }, 2000);
    }, []);

    function showNextLetter() {
        if (index < Data.length) {
            setTextProgress(Data.slice(0, index++));
            setTimeout(showNextLetter, 50); 
        }
    }
    return (
        <div className="book-animation">
            <img style={{ borderRadius: "10px" }} width="100px" src={logo} alt="logo" />
            <div className="book">
                <div className="page page-1">
                    {textProgress}
                    {/* <Typical
                        steps={[2000, "Let's store your Notes Here", 1000]}
                        loop={1}
                        wrapper="h1"
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;