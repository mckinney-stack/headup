import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Language() {
  const { locale, selectLanguage } = useContext(LanguageContext);

  return (
    <div class="language">
        <select value={locale} onChange={selectLanguage}>
          <option value="en">English</option>
          <option value="sk">Slovak</option>
        </select>
    </div>
  );
}

export default Language;