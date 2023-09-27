import { useState } from 'react';


function Counter(){

    const [number, updateNumber] = useState(Math.floor(Math.random() * 100));

    setTimeout(() => {
        updateNumber([Math.floor(Math.random() * 100)]);
    }, 1300)

    return (
        <h5>{number}</h5>
    )

};

export default Counter;

