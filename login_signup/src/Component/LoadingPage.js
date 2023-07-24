import React from 'react';
import '../Style/Style.css';
// import Typical from 'react-typical'
import logo from '../Assests/logo.png';

function LoadingPage() {
    return (
        <div className="book-animation">
            <img style={{borderRadius:"10px"}} width="100px" src={logo} alt="logo" />
            <div className="book">
                <div className="page page-1">
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