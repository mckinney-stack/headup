import React, { useEffect } from 'react';

function StickhandleType({types, type, setType, isActive}) {

    useEffect(() => {
        let timeoutId;
        if (isActive) {
            timeoutId = setTimeout(() => {
                setType(types[Math.floor(Math.random() * types.length)]);
            }, 8000);
        }
        return () => clearTimeout(timeoutId);
    }, [isActive, type, types, setType]);

    return <h1>{type}</h1>;
}

export default StickhandleType;