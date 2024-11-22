import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => (
  <Box sx={{ textAlign: 'center', mb: 5 }}>
    <Typography 
      variant="h3" 
      sx={{ fontWeight: 'bold', mb: 2 }}
    >
      Welcome to FreshMart
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ fontSize: '1.2rem', maxWidth: 600, margin: '0 auto' }}
    >
      Your one-stop destination for the freshest produce, high-quality pantry staples, and sustainable products.
    </Typography>
  </Box>
);

export default Hero;