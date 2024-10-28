import React from 'react';
import { Grid } from '@mui/system'; 
import Logo from '../Assets/Images/logo.png';
import { dashBoardContainer } from '../Styles/CustomCss';


export default function DashBoard() {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={5} md={4} sx={{width:'15%',height:'100vh'}}>
        <img src={Logo} alt="Logo" className='logo1' />
      </Grid>
      <Grid item xs={7} md={8} sx={{ backgroundColor: 'blue' ,width:'83%'}}>
        
      </Grid>
    </Grid>
  );
}
