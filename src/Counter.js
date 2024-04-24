import { useState } from 'react';

function Counter({isActive, reset}){

    console.log("Counter Rendered");

    const [number, updateNumber] = useState(0);

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

/*

Please note that you would need to modify the StickhandleType and 
Counter components to accept and use these props. They should 
start their cycles when isActive is true and stop their cycles 
when isActive is false. They should also reset their states when 
the reset function is called.

*/