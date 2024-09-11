import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import amazon from '../assets/icons/amazon.svg';
import mercadoLibre from '../assets/icons/mercadoLibre.svg';
import bestBuy from '../assets/icons/bestBuy.svg';
import Divider from '@mui/material/Divider';


export default function ProductCard ({product}) {

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} xl={2} key={product.gtin}>
      <Paper elevation={4} sx={{borderRadius:4}}>
        <Box 
          sx={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
          }}
        >
          <img className="img" src={product.imageURL} alt="product" />
          <Box padding={1}>
            <Typography variant="h6" component="h6">
              <strong>{product.brand} {product.model}</strong>
            </Typography>
          </Box>
          <Divider flexItem />
          <Box>
            <Typography sx={{ paddingTop:'4px' }} variant="subtitle1" component="p">
              <strong>Sales:</strong> {product.sales}
            </Typography>
            <Typography sx={{ paddingTop:'2px' }} variant="subtitle1" component="p">
              <strong>Profit:</strong> ${product.profitUSD.toFixed(2)} 
            </Typography>
            <Typography sx={{ paddingTop:'2px' }} variant="subtitle1" component="p">
              <strong>Weight:</strong> {product.weight.toFixed(2)} kg
            </Typography>
          </Box>
          <Divider flexItem />
          <Box 
            sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:1
          }}
          >
            <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:1,
            }}  
            >
              <div className='divIcon'>
                <img className="icon" src={amazon} alt="amazon-icon" />
              </div>
              <p>${product.priceBB.toFixed(2)}</p>
              <a href={product.urlBB} target="_blank">Link</a>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:1
            }}  
            >
              <div className='divIcon'>
                <img className="icon" src={mercadoLibre} alt="ml-icon" />
              </div>
              <p>${product.priceML.toFixed(2)}</p>
              <a href={product.urlML} target="_blank" >Link</a>
            </Box>
            <Divider orientation="vertical" flexItem />
            {/*  <Box
                sx={{
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center",
                  alignItems:"center",
                  width:1
              }}  
              >
                <div className='divIcon'>
                  <img className="icon" src={bestBuy} alt="ml-icon" />
                </div>
                <p>$21.19</p>
                <a href="">Link</a>
              </Box> */}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
