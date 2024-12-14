import React, { useState, useEffect } from 'react';

const TextTypingEffect = ({
      text,
      speed = 100,
      className = ''
  }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return (
        <div className={`inline-block ${className}`}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </div>
    );
};

export default TextTypingEffect;