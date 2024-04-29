import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

function StickhandleType({isActive, type, types, setType}) {

    useEffect(() => {
        let timeoutId;
        if (isActive) {
            timeoutId = setTimeout(() => {
                let newType;
                do {
                    newType = types[Math.floor(Math.random() * types.length)];
                } while (newType === type);
                setType(newType);
            }, 8000);
        }
        return () => clearTimeout(timeoutId);
    }, [isActive, type, setType]);

    return <h1><FormattedMessage id={type} /></h1>;
}

export default StickhandleType;