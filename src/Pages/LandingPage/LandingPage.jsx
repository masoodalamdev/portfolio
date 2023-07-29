import React from 'react'
import fullstack from '../../Assets/Images/fullstack.gif'
import { Box, ButtonGroup, Grid, Stack } from '@mui/material'
import './LandingPage.css'
import MuiButton from '../../Components/MuiButton/MuiButton'
export default function LandingPage() {
  return (
    <Box sx={{px: { xs: 2, md: 6 }, minHeight: 100 + 'vh'}}  >
    <Grid container >

    <Grid item xs={12} md={6}  >
    <div class="wrapper">
    <div class="static-txt">Hi,</div>
    <div class="static-txt">I'm <span id='masoodalam'>Masood Alam</span></div>
 
<br/>
    <ul class="dynamic-txts">
      <li><span>Designer</span></li>
      <li><span>Developer</span></li>
      <li><span>Freelancer</span></li>
      <li><span>Blogger</span></li>
    </ul>
    <Stack direction='row' sx={{p:2, justifyContent: 'center'}}>
     <ButtonGroup size="large" aria-label="large button group">
     <MuiButton
    text='Hire Me'
    href='#contact'
    />
    <MuiButton
    text='My Resume'
    href='https://drive.google.com/file/d/1ZtylEdd5WIP19wq90o1U0LCLppEy6NAj/view?usp=drive_link'
    />
      </ButtonGroup>
    </Stack>
  </div>

    {/* <Typography variant="h5" gutterBottom sx={{textAlign: 'center', color: '#444'}} id='Iam'>
     I AM
    </Typography>
    <Typography variant="h3" gutterBottom sx={{textAlign: 'center', color: '#444', fontFamily: 'cursive'}} id='Masood'>
     Masood Alam
    </Typography>
    <Typography variant="h5" gutterBottom sx={{textAlign: 'center', color: '#444'}} id='Developer' >
     Full Stack Web Developer
    </Typography>
    <br/>
    <Stack direction='row'>
    <Button href="#contact" variant='outlined' sx={{display: 'flex', margin: '0 auto', bgcolor: '#6e45e2', color: '#fff', borderColor: '#6e45e2', '&:hover': {color: '#6e45e2', borderColor: '#6e45e2'}}}>
      Hire Me
    </Button>
    </Stack> */}
</Grid>
<Grid item xs={12} md={6}>
<img src={fullstack} alt="backgroundImage" width='100%' height='100%' />
 
 

</Grid>
  </Grid>
  </Box>
  )
}
