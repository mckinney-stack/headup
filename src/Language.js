import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { LanguageContext } from './LanguageContext';
import { FlagIcon } from 'react-flag-kit';

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const StyledSelect = styled.select`
  width: 128px;
`;

const RectangularFlagIcon = styled(FlagIcon)`
  width: 24px !important;
  height: 16px !important;
  margin-right: 12px;
`;

function Language() {
  const { locale, selectLanguage } = useContext(LanguageContext);

  return (
    <LanguageContainer>
      <RectangularFlagIcon code={locale === 'en' ? 'GB' : 'SK'} />
      <StyledSelect className="form-select form-control form-select-sm" value={locale} onChange={selectLanguage}>
        <option value="en">English</option>
        <option value="sk">Slovenský</option>
      </StyledSelect>
    </LanguageContainer>
  );
}

export default Language;