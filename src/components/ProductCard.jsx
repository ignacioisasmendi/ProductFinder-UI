import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  SvgIcon  from '@mui/material/SvgIcon';
import amazon from '../assets/amazon.svg';
import mercadoLibre from '../assets/mercadoLibre.svg';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


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
