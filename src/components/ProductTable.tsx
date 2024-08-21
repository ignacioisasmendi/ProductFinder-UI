import ProductCard from '../components/ProductCard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';


export default function ProductTable () {
  return (
    <Box bgcolor={"#fff"} padding={3} borderRadius={4}
      sx={{
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      }}>
      <Box sx={{ bgcolor: '#F6F8FE'}}>
        Hola
      </Box>
      <Grid container spacing={2}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
  </Box>
  );
}



