import React from 'react';
import Header from './header';
import Footer from './Footer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme'; 

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;