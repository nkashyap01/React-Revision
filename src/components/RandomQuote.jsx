import React from 'react';

const RandomQuote = () => {
    const quotes = [
        "Success is not final; failure is not fatal: It is the courage to continue that count. -Winston S. Churchill",
        "Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
        "If you want to make your dreams come true, the first thing you have to do is wake up. -J.M. Power",
        "If you really look closely, most overnight successes took a long time. -Steve Jobs",
        "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
        "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
        "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    return (
        <div>
            {quote}
        </div>
    );
}

export default RandomQuote;
