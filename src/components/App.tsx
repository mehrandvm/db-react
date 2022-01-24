import React from 'react';
import { LanguageProvider } from '../context/language';
import Home from './home/Home';

const App = () => {
  return (
    <LanguageProvider userLanguage={'fa'}>
      <Home />
    </LanguageProvider>
  );
};

export default App;
