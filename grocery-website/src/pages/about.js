import React from 'react';
import { Typography, Container, Box, CardMedia } from '@mui/material';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <Container sx={{ my: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            At FreshMart, we pride ourselves on providing fresh, affordable, and sustainable grocery products for our community. Explore our story, mission, and commitment to quality.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Our Story
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
            Established in 1995, FreshMart began as a small family-run store in the heart of our town. Over the years, we’ve grown into a trusted destination for fresh produce and high-quality food products. 
            Despite our growth, we remain committed to our roots—delivering exceptional service, supporting local farmers, and fostering a healthy lifestyle for our customers.
          </Typography>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/800x400"
            alt="FreshMart history"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 4,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            We aim to make healthy and organic food accessible to everyone. By prioritizing quality and sustainability, we strive to create a positive impact on our customers, our community, and the environment.
            Our dedication to freshness and affordability ensures that you and your family receive the best possible products every day.
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            px: 4,
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
            mt: 6,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Experience Freshness Like Never Before
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}
          >
            Visit FreshMart today and discover the difference in quality, affordability, and care. Your satisfaction is our priority.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;