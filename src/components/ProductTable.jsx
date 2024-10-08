import ProductCard from './ProductCard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, { useEffect, useState} from 'react';
import ProductDetails from './ProductDetails';


export default function ProductTable ({results}) {

  const details = {
    productsFound: results.products.length,
    productsFoundML: results.count
  }
  console.log(details);
  

  return (
    <Box bgcolor={"#fff"} padding={3} borderRadius={4}
      sx={{
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      }}>
      <ProductDetails details={details}></ProductDetails>
      <Grid container spacing={2}>
        {results.products && results.products.map((product) => (
          <ProductCard product={product} />
        ))}        
      </Grid>
  </Box>
  );
}



