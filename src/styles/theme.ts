import { createTheme, responsiveFontSizes } from '@mui/material';

import KalamehThin from '../assets/fonts/Kalameh/KalamehWeb-Thin.woff';
import KalamehExtraLight from '../assets/fonts/Kalameh/KalamehWeb-ExtraLight.woff';
import KalamehLight from '../assets/fonts/Kalameh/KalamehWeb-Light.woff';
import KalamehRegular from '../assets/fonts/Kalameh/KalamehWeb-Regular.woff';
import KalamehMedium from '../assets/fonts/Kalameh/KalamehWeb-Medium.woff';
import KalamehSemiBold from '../assets/fonts/Kalameh/KalamehWeb-SemiBold.woff';
import KalamehBold from '../assets/fonts/Kalameh/KalamehWeb-Bold.woff';
import KalamehExtraBold from '../assets/fonts/Kalameh/KalamehWeb-ExtraBold.woff';
import KalamehBlack from '../assets/fonts/Kalameh/KalamehWeb-Black.woff';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        'Kalameh',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#ceae80',
      },
      secondary: {
        main: '#007063',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 100;
          src: local('Kalameh'), local('Kalameh-Thin'), url(${KalamehThin}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('Kalameh'), local('Kalameh-ExtraLight'), url(${KalamehExtraLight}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Kalameh'), local('Kalameh-Light'), url(${KalamehLight}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Kalameh'), local('Kalameh-Regular'), url(${KalamehRegular}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Kalameh'), local('Kalameh-Medium'), url(${KalamehMedium}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Kalameh'), local('Kalameh-SemiBold'), url(${KalamehSemiBold}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Kalameh'), local('Kalameh-Bold'), url(${KalamehBold}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('Kalameh'), local('Kalameh-ExtraBold'), url(${KalamehExtraBold}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Kalameh';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: local('Kalameh'), local('Kalameh-Black'), url(${KalamehBlack}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
  })
);
