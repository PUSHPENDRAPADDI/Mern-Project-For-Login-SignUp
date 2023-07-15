import React from 'react';
import '../Style/Style.css';
import Typical from 'react-typical'

function LoadingPage() {
    return (
        <div className="book-animation">
            <div className="book">
                <div className="page page-1">
                    <Typical
                        steps={[2000, "Let's store your Notes Here", 1000]}
                        loop={1}
                        wrapper="h1"
                    />
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;