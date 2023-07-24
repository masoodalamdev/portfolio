import React from 'react'
import Developer from '../../Assets/Images/developer.svg'
import { Box, Button, Grid, Typography } from '@mui/material'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import About from '../About/About'
import './home.css'
import Experience from '../Experience/Experience'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
export default function Home() {
  return (
    <>
    <Box sx={{px:{xs:12}, minHeight: 100 + 'vh'}} >
    <Grid container >
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
   <Projects  />
   <Skills />
   <Experience/>
   <About/>
   </Box>
    <Footer/>
   </>
  )
}
