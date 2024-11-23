import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import Layout from '../components/layout';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ my: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 3 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
          Have questions or feedback? Fill out the form below, and we'll get back to you as soon as possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: 4,
              borderRadius: 2,
            }}
          >
            <TextField label="Your Name" variant="outlined" fullWidth required />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
            <TextField label="Your Message" variant="outlined" fullWidth required multiline rows={4} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                padding: '10px 20px',
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;