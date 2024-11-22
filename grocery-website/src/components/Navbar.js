import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: theme.palette.primary.contrastText,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Grocery Store
        </Typography>
        <Button
          color="inherit"
          href="/"
          sx={{
            textTransform: theme.typography.button.textTransform,
            fontWeight: theme.typography.button.fontWeight,
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          href="/about"
          sx={{
            textTransform: theme.typography.button.textTransform,
            fontWeight: theme.typography.button.fontWeight,
          }}
        >
          About
        </Button>
        <Button
          color="inherit"
          href="/contact"
          sx={{
            textTransform: theme.typography.button.textTransform,
            fontWeight: theme.typography.button.fontWeight,
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;