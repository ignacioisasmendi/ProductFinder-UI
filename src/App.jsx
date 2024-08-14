import './App.css'
import ProductCard from './components/ProductCard.jsx'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App
