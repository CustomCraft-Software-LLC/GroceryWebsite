import React from 'react';
import Layout from '../components/layout';
import { Container, Typography, Box } from '@mui/material';

const About = () => (
  <Layout>
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        About Us
      </Typography>
      <Box sx={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our grocery store offers a variety of fresh produce, pantry staples, and daily essentials. 
          We are committed to providing high-quality products for you and your family.
        </Typography>
        <Typography variant="body1">
          Since our establishment, we have focused on making grocery shopping more convenient, 
          with an emphasis on freshness, affordability, and excellent service.
        </Typography>
      </Box>
    </Container>
  </Layout>
);

export default About;