import React, { useEffect, useState } from 'react';

const TextEffect = ({ fullText }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex += 1;
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [fullText]);

    return (
        <span className="text-3xl font-semibold text-info italic tracking-wide">{text}</span>
    );
};

export default TextEffect;
