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
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="body1" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} Grocery Store. All Rights Reserved.
        </Typography>
        <Typography variant="body2">
          Made with ❤️ using Gatsby and Material-UI.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;