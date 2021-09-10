import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: '#F5F8FA',
    yellow: '#FFBA08',
    gray: {
      "600": "#47585B",
      "500": "#999999",
      "200": "#DADADA",
    }
  },
  breakpoints: {
    sm: '23.439em', // 375px
    md: "48em",     // 768px
    lg: "62em",     // 992px
    xl: "80em",     // 1.280px
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