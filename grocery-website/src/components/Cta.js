import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Cta = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 4,
        mt: 6,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 2,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Shop Fresh, Save Big
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, margin: '0 auto', mb: 4 }}>
        Partner with FreshMart for top-quality grocery products at unbeatable prices. Your customers deserve the best—join us today!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/products"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          borderRadius: 2,
        }}
      >
        Browse Products
      </Button>
    </Box>
  );
};

export default Cta;