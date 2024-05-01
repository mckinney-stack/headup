import React, { useEffect } from 'react';
import { StyledH1 } from './StyledComponents.js';

function Counter({number, updateNumber, isActive}){

    useEffect(() => {
        let intervalId;
        let previousNumber = number;
        if (isActive) {
            intervalId = setInterval(() => {
                let newNumber;
                do {
                    newNumber = Math.floor(Math.random() * 11);
                } while (newNumber === previousNumber);
                updateNumber(newNumber);
                previousNumber = newNumber;
            }, 2000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isActive, number, updateNumber]);

    
    return (
        <StyledH1>{number}</StyledH1>
    )

};

export default Counter;


