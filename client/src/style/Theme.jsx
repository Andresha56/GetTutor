

// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    color: '#F0F8FF',
  },
  components: {
    // Override styles for the Button component
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0F8FF', 
          color:"rgba(14, 11, 30, 1)",
          padding:"10px 15px",
          '&:hover': {
            backgroundColor: '#F0F8FF', 
          },
          
        },
      },
    },
  },
});

export default theme;
