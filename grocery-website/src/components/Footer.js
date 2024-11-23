import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Socials from './Socials';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
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
        <Socials />
      </Container>
    </Box>
  );
};

export default Footer;