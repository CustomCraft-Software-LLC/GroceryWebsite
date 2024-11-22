import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import Layout from '../components/Layout';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <TextField label="Your Name" variant="outlined" fullWidth required />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained">
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;