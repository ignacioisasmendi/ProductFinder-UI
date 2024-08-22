import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import amazon from '../assets/amazon.svg';
import mercadoLibre from '../assets/mercadoLibre.svg';
import Divider from '@mui/material/Divider';


export default function ProductCard () {

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
          <img className="img" src="https://http2.mlstatic.com/D_NQ_NP_951036-MLA47845059413_102021-O.webp" alt="" />
          <Box padding={1}>
            <Typography variant="h6" component="h6">
              Creatine BSN 300g 
            </Typography>
          </Box>
          <Divider flexItem />
          <Box>
            <Typography sx={{ paddingTop:'8px' }} variant="subtitle1" component="p">
              Profit: $ 100.00
            </Typography>
            <Typography sx={{ paddingTop:'8px' }} variant="subtitle1" component="p">
              Weight: 0.3 kg
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
              <p>$21.19</p>
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
              <p>$21.19</p>
              <a href="">Link</a>
            </Box>

          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
