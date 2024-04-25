import React, { useEffect } from 'react';

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
        <h1>{number}</h1>
    )

};

export default Counter;


