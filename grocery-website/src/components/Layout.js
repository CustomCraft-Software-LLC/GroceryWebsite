import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../styles/theme';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box>
				<Header />
				<Box component="main" sx={{ flex: 1 }}>
					{children}
				</Box>
				<Footer />
			</Box>
		</ThemeProvider>
	);
};

export default Layout;
