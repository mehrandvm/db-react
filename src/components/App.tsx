import React from 'react';
import { LanguageProvider } from '../context/language';
import { CustomThemeProvider } from '../context/theme';
import PanelRouter from '../router';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
  prepend: true,
});

const App = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <LanguageProvider userLanguage="fa">
        <CustomThemeProvider colorMode="light">
          <PanelRouter />
        </CustomThemeProvider>
      </LanguageProvider>
    </CacheProvider>
  );
};

export default App;
