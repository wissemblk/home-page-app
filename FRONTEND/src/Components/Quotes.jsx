import React, { useState } from 'react';
import './Quotes.css';
import quotes from "./apiQuotes";

function Quotes() {
    const [quote, setQuote] = useState({ text: "to be or not to be,that is the question", author: "Shakespear" });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    };

    return (
        <div className='q-container'>
            <div className="quote">{quote.text}</div>
            <div className="line">
                <div className="bottomQ">
                    <div className='Qauthor'>{quote.author}</div>
                    <div className='refresh-icon'>
                        <img src='/refresh.png' onClick={random} alt='refresh icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;
