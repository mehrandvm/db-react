import React from 'react';
import { LanguageProvider } from '../context/language';
import Home from './home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { theme } from '../styles/theme';

const App = () => {
  return (
    <LanguageProvider userLanguage="fa">
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline enableColorScheme />
          <Home />
        </StylesProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
