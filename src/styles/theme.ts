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
    sm: '375px'
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