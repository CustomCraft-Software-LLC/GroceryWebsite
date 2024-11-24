import React, { useState } from "react"
import { Box, Typography, TextField, Stack } from "@mui/material"
import ProductCard from "../components/ProductCard"
import products from "../data/products"
import Layout from "../components/layout"

const Products = () => {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h1" align="center" gutterBottom>
          Our Products
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <TextField
            label="Search Products"
            variant="outlined"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ maxWidth: 400, width: "100%" }}
          />
        </Box>

        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                width: "100%",
              }}
            >
              No products match your search.
            </Typography>
          )}
        </Stack>
      </Box>
    </Layout>
  )
}

export default Products
