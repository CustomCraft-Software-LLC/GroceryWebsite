import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#9ACD32', contrastText: '#FFFFFF' }, 
    secondary: { main: '#ADFF2F', contrastText: '#000000' }, 
    background: { default: '#FFFFFF', paper: '#F4F6F8' },
    text: { primary: '#212121', secondary: '#616161' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { 
      fontSize: '2.25rem', 
      fontWeight: 700, 
      lineHeight: 1.2, 
      color: '#9ACD32', 
    },
    h2: { 
      fontSize: '1.75rem', 
      fontWeight: 600, 
      lineHeight: 1.3, 
      color: '#9ACD32', 
    },
    h3: { 
      fontSize: '1.5rem', 
      fontWeight: 500, 
      lineHeight: 1.4, 
      color: '#9ACD32', 
    },
    body1: { 
      fontSize: '1rem', 
      fontWeight: 400, 
      lineHeight: 1.5, 
      color: '#000000',
    },
    body2: { 
      fontSize: '0.875rem', 
      fontWeight: 400, 
      lineHeight: 1.43, 
      color: '#000000', 
    },
    button: { 
      fontWeight: 600, 
      textTransform: 'none', 
      color: '#FFFFFF',
    },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none', padding: '8px 16px' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { padding: '16px', borderRadius: 8 },
      },
    },
  },
});

export default theme;