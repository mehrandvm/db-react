import React, { createContext, FC, useMemo, useState } from 'react';
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { returnTheme } from '../../styles/theme';
import { StylesProvider } from '@mui/styles';

type ColorMode = 'light' | 'dark';

interface LanguageContextValue {
  toggleColorMode: () => void;
}

interface LanguageProviderValue {
  colorMode: ColorMode;
}

export const ThemeContext = createContext<LanguageContextValue>({
  toggleColorMode: () => {},
});

export const CustomThemeProvider: FC<LanguageProviderValue> = (props) => {
  const [mode, setMode] = useState<ColorMode>(props.colorMode);
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(returnTheme(mode))),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline enableColorScheme />
          {props.children}
        </StylesProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
