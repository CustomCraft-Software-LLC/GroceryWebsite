import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Benefits from '../components/Benefits';
import Cta from '../components/Cta';
import { Container } from '@mui/material';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Container sx={{ mt: 8, mb: 8 }}>
        <FeaturedProducts />
        <Benefits />
        <Cta />
      </Container>
    </Layout>
  );
};

export default Index;