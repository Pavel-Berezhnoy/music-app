import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import '../styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    text: {
      primary: '#e4e4e4',
    },
    secondary: {
      main: '#e4e4e4',
    },
  },
  typography: {
    fontSize: 14,
  },
});

const Wrapper = styled('div')({
  backgroundColor: 'var(--theme-secondary)',
  width: '100%',
  height: '100%',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
