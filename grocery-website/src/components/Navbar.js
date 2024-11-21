import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Grocery Store
      </Typography>
      <Button color="inherit" href="/">Home</Button>
      <Button color="inherit" href="/about">About</Button>
      <Button color="inherit" href="/contact">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;