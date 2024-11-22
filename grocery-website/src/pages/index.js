import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Container, Box, Typography, Button, CardMedia } from '@mui/material';

const Index = () => {
  return (
    <Layout>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Hero />

        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
          >
            Featured Products
          </Typography>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/300"
            alt="Featured Products"
            sx={{ height: 300, margin: '0 auto', borderRadius: 2, mb: 4 }}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            Discover our customer favorites, handpicked for quality and freshness. From crisp apples to farm-fresh milk.
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            py: 5,
            mt: 8,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Shop Fresh, Save Big
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 600, margin: '0 auto', mb: 3 }}
          >
            Experience the best of FreshMart—fresh products, great deals, and unbeatable quality.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/products"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Checkout Products
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Index;