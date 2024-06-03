import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { LanguageContext } from './LanguageContext';
import { FlagIcon } from 'react-flag-kit';

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
`;
const slideUp = keyframes`
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  animation: ${slideUp} 0.8s ease-in-out forwards;

  ${props => props.$shouldHide && css`
    animation: ${slideDown} 0.8s ease-in-out forwards;
  `}
`;

export const StyledSelect = styled.select`
  width: 128px;
`;

const RectangularFlagIcon = styled(FlagIcon)`
  width: 24px !important;
  height: 16px !important;
  margin-right: 12px;
`;

function Language({ $shouldHide }) {
  const { locale, selectLanguage } = useContext(LanguageContext);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if ($shouldHide) {
      const timerId = setTimeout(() => setIsHidden(true), 800); // Match the duration of the animation
      return () => clearTimeout(timerId); // Clean up on unmount
    } else {
      setIsHidden(false);
    }
  }, [$shouldHide]);

  if (isHidden) {
    return null;
  }

  return (
    <LanguageContainer $shouldHide={$shouldHide}>
      <RectangularFlagIcon code={locale === 'en' ? 'GB' : 'SK'} />
      <StyledSelect className="form-select form-control form-select-sm" value={locale} onChange={selectLanguage}>
        <option value="en">English</option>
        <option value="sk">Slovenský</option>
      </StyledSelect>
    </LanguageContainer>
  );
}

export default Language;