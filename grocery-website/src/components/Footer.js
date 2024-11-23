import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            fontWeight: '500',
          }}
        >
          © {new Date().getFullYear()} Grocery Store. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;