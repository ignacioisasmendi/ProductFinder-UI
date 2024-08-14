import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  SvgIcon  from '@mui/material/SvgIcon';
import amazon from '../assets/amazon.svg';
import mercadoLibre from '../assets/mercadoLibre.svg';


export default function ProductCard () {
  return (
    <Grid item xs={4}>
      <Paper elevation={1}>
        <Box 
          sx={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
          }}
        >
          <img className="img" src="https://http2.mlstatic.com/D_NQ_NP_951036-MLA47845059413_102021-O.webp" alt="" />
          <Box padding={1}>
            <Typography variant="subtitle1" component="h2">
              Product Name
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" component="p">
              Profit: $ 100.00
            </Typography>
          </Box>
          <Box 
            sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
          }}
          >
            <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                borderRight:"1px solid #000",
            }}  
            >
              <img className="icon" src={amazon} alt="amazon-icon" />
              <p>100000</p>
              <a href="">Link</a>
            </Box>
            <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
            }}  
            >
              <img className="icon" src={mercadoLibre} alt="ml-icon" />
              <p>100000</p>
              <a href="">Link</a>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
