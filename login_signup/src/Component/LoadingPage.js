import React from 'react';
import '../Style/Style.css';

function LoadingPage() {
    return (
        <div class="book-animation dark-mode">
            <div class="book">
                <div class="book-cover">
                    <div class="book-title">Studying with a book</div>
                </div>
                <div class="book-pages">
                    <div class="page page-1"></div>
                    <div class="page page-2"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;