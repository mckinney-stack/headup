import React from 'react';

function Counter({number, updateNumber, isActive, reset}){

    if (isActive) {
        setTimeout(() => {
            updateNumber([Math.floor(Math.random() * 11)]);
        }, 1000);
    } 

    return (
        <h1>{number}</h1>
    )

};

export default Counter;


