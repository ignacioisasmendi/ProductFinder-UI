import ProductCard from '../components/ProductCard'
import ProductTable from '../components/ProductTable';
import Container from '@mui/material/Container';
import SearchBar from '../components/SearchBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function Home () {
  const [results, setResults] = useState();
  
  return (
    <Container maxWidth='false'>
      <Box
        sx={{display:"flex", flexDirection:"column", marginY:"40px"}}>
        <Typography variant='h2' align='center' color="primary">
          Product Finder
        </Typography>
        <SearchBar setResults={setResults} ></SearchBar>
        {results &&
          <ProductTable results={results}></ProductTable>
        } 
      </Box>
    </Container>
  );
}
