import React from 'react';
import { LanguageProvider } from '../context/language';
import { CustomThemeProvider } from '../context/theme';
import Home from './home/Home';
import { CssBaseline } from '@mui/material';
import { StylesProvider } from '@mui/styles';

const App = () => {
  return (
    <LanguageProvider userLanguage="fa">
      <CustomThemeProvider colorMode="light">
        <StylesProvider injectFirst>
          <CssBaseline enableColorScheme />
          <Home />
        </StylesProvider>
      </CustomThemeProvider>
    </LanguageProvider>
  );
};

export default App;
