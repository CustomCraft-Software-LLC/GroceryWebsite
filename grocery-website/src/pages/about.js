import React from 'react';
import { Typography, Container } from '@mui/material';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We are a local grocery store providing fresh produce and quality food products at affordable prices. Our mission is to provide our customers with healthy and organic choices to improve their daily lives.
        </Typography>
      </Container>
    </Layout>
  );
};

export default About;