// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF8DC',
      light:"rgb(240, 248, 255)",
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
      color: '#F0F8FF',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(209,102,247,1) 0%, rgba(70,252,250,1) 100%)', 
          color: '#fff',
          padding: '10px 15px',
          '&:hover': {
            background:'linear-gradient(90deg, rgba(209,102,247,1) 0%, rgba(70,252,250,1) 100%)'
          },
        },
      },
    },
  },
});

export default theme;
