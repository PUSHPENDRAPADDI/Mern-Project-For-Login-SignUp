import React from 'react';
import '../Style/Style.css';

function LoadingPage() {
    return (
        <div className="book-animation dark-mode">
            <div className="book">
                <div className="book-cover">
                    <div className="book-title">Studying with a book</div>
                </div>
                <div className="book-pages">
                    <div className="page page-1"></div>
                    <div className="page page-2"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;