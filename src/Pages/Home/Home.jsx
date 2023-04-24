import React from 'react'
import Developer from '../../Assets/Images/developer.svg'
import { Box, Button, Grid, Typography } from '@mui/material'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import About from '../About/About'
import './home.css'
import Experience from '../Experience/Experience'
export default function Home() {
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={12} md={6} sx={{mt: '10%'}} >
    <Typography variant="h5" gutterBottom sx={{textAlign: 'center', color: '#444'}} id='Iam'>
     I AM
    </Typography>
    <Typography variant="h3" gutterBottom sx={{textAlign: 'center', color: '#444', fontFamily: 'cursive'}} id='Masood'>
     Masood Alam
    </Typography>
    <Typography variant="h5" gutterBottom sx={{textAlign: 'center', color: '#444'}} id='Developer' >
     Full Stack Web Developer
    </Typography>
    <br/>
    <Button variant='outlined' sx={{display: 'flex', margin: '0 auto'}}>
      Hire Me
    </Button>
</Grid>
<Grid item xs={12} md={6}>
<img src={Developer} alt="backgroundImage" width='100%' height='100%' />
 
 

</Grid>
  </Grid>
   <Portfolio/>
   <Skills/>
   <Experience/>
   <About/>

   </>
  )
}
