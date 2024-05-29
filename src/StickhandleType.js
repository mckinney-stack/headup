import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledH3 } from './StyledComponents.js';

function StickhandleType({isActive, type, types, setType, animationStage}) {

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

    return <StyledH3 $shouldExit={animationStage === '4'}><FormattedMessage id={type} /></StyledH3>;
}

export default StickhandleType;