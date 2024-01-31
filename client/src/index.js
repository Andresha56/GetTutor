import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './style/Theme';
import { ThemeProvider } from '@emotion/react';
import UserContext from './context/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContext>
      <App />
      </UserContext>
    </ThemeProvider>
  </React.StrictMode>
);

