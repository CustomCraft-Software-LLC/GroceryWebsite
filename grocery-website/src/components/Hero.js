import React from "react"
import { Box, Typography, Button } from "@mui/material"

const Hero = () => {
  return (
    <Box
      sx={{
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("https://via.placeholder.com/1200x400")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2 }}>
        Welcome to FreshMart
      </Typography>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Your trusted wholesaler for fresh and quality groceries.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/products"
      >
        Browse Products
      </Button>
    </Box>
  )
}

export default Hero
