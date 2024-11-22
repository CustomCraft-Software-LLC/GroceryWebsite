import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#055505', contrastText: '#FFFFFF' },
    secondary: { main: '#FFC107', contrastText: '#000000' },
    background: { default: '#FFFFFF', paper: '#F4F6F8' },
    text: { primary: '#212121', secondary: '#616161' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.3 },
    h3: { fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.4 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.43 },
    button: { fontWeight: 600, textTransform: 'none' },
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
