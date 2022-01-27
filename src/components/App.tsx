import React from 'react';
import { LanguageProvider } from '../context/language';
import { CustomThemeProvider } from '../context/theme';
import PanelRouter from '../router';

const App = () => {
  return (
    <LanguageProvider userLanguage="fa">
      <CustomThemeProvider colorMode="light">
        <PanelRouter />
      </CustomThemeProvider>
    </LanguageProvider>
  );
};

export default App;
