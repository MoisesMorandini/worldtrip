import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: '#F5F8FA',
    gray: {
      "600": "#47585B",
      "500": "#999999",
      "200": "#DADADA",
    }
  },
  breakpoints: {
    sm: '23.439em', // 375
    md: "48em",     // 768
    lg: "62em",     // 992
    xl: "80em",     // 1.280
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'white'
      }
    }
  }
});