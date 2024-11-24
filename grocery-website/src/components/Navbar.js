import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const pathPrefix = '/GroceryWebsite';

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
        borderRadius: 0
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: theme.palette.common.white,
          }}
        >
          Grocery Store
        </Typography>
        <div>
          {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
            <Button
              key={index}
              href={`${pathPrefix}${item === 'Home' ? '/' : `/${item.toLowerCase()}`}`}
              sx={{
                mx: 1,
                color: theme.palette.common.white,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;