import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LanguageHeading = styled.h5`
  margin-right: 8px;
`;

function Language() {
  const { locale, selectLanguage } = useContext(LanguageContext);

  return (
    <LanguageContainer>
      <LanguageHeading>Language / Jazyk:</LanguageHeading>
      <select value={locale} onChange={selectLanguage}>
        <option value="en">English</option>
        <option value="sk">Slovenský</option>
      </select>
    </LanguageContainer>
  );
}

export default Language;