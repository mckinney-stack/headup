import React, { useState, useEffect } from 'react';

function StickhandleType({isActive, reset}) {

    const types = ['Wide', 'Narrow', 'Figure Eight', 'Freestyle', 'Toe Drag'];
    const [type, setType] = useState(types[Math.floor(Math.random() * types.length)]);

    useEffect(() => {
        let timeoutId;
        if (isActive) {
            timeoutId = setTimeout(() => {
                setType(types[Math.floor(Math.random() * types.length)]);
            }, 8000);
        }
        return () => clearTimeout(timeoutId);
    }, [isActive, type]);

    return <h1>{type}</h1>;
}

export default StickhandleType;