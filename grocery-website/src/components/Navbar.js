import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
          }}
        >
          Grocery Store
        </Typography>

        {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
          <Button
            key={index}
            color="inherit"
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            sx={{
              mx: 1,
            }}
          >
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;