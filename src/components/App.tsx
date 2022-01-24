import React from 'react';
import { LanguageProvider } from '../context/language';
import { CustomThemeProvider } from '../context/theme';
import Home from './home/Home';

const App = () => {
  return (
    <LanguageProvider userLanguage="fa">
      <CustomThemeProvider colorMode="light">
        <Home />
      </CustomThemeProvider>
    </LanguageProvider>
  );
};

export default App;
