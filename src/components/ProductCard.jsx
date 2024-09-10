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
    <Grid item xs={2}>
      <Paper elevation={4} sx={{borderRadius:4}}>
        <Box 
          sx={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
          }}
        >
          <img className="img" src={product.imageURL} alt="" />
          <Box padding={1}>
            <Typography variant="h6" component="h6">
              {product.brand} {product.model}
            </Typography>
          </Box>
          <Divider flexItem />
          <Box>
            <Typography sx={{ paddingTop:'8px' }} variant="subtitle1" component="p">
              <p><strong>Profit:</strong> ${product.profitUSD.toFixed(2)}</p> 
            </Typography>
            <Typography sx={{ paddingTop:'8px' }} variant="subtitle1" component="p">
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
              <a href="">Link</a>
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
              <a href="">Link</a>
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
