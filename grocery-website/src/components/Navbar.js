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
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4 },
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
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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