// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF8DC',//cornsilk
      light:"",
      dark:"",
    },
    secondary: {
      main: '#D2B48C',//tan
      light:"",
      dark:"",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    body1: {
      color: '#F0F8FF',
    },
  },
  components: {
    MuiButton: {
      
        defaultProps:{
          disableRipple:true,
        },
      
      styleOverrides: {
        root: {
          backgroundColor: '#F0F8FF',
          color: 'rgba(14, 11, 30, 1)',
          padding: '10px 15px',
          '&:hover': {
            backgroundColor: '#F0F8FF',
          },
        },
      },
    },
  },
});

export default theme;
