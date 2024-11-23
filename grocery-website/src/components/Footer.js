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
        textAlign: 'center',
        py: 4,
      }}
    >
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            fontWeight: '660',
          }}
        >
          © {new Date().getFullYear()} Grocery Store. All Rights Reserved.
        </Typography>
        <Socials />
    </Box>
  );
};

export default Footer;