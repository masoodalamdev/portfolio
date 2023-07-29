import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import PageHeader from '../../Components/PageHeader/PageHeader'
import skdigitech from '../../Assets/Images/experience/skdigitech.png'

export default function Experience() {
  return (
    <>
      <Grid container id="experience" sx={{ px: { xs: 2, md: 6 }}}>
        <Grid item xs={12}>
          <PageHeader
            heading='Experience'
          />
        </Grid>

        <Grid container sx={{py:4}}>

          <Grid item xs={12} md={7}>
                <Typography variant='h5' sx={{ color: '#6e45e2', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', }}>
                  Internee as Front-end Developer
                </Typography>
                <Typography variant='h6' sx={{ color: '#6e45e2', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', }}>
                  Sk Digi Tech
                </Typography>
                <Box sx={{pl:4}}>
                <br />
                <Typography variant='body' sx={{ color: '#6e45e2', lineHeight: 2,}}>
                  <ul>
                    <li>
                    A Complete React Blog App with
                  Authentication and Admin Dashboard.
                    </li>
                    <li>
                    Build from Scratch to Final Deployment.
                    </li>
                    <li>
                    React Js with Material UI for Creating and
                  Designing Interactive User Interface.
                    </li>
                    <li>
                    Node Js and Express Js for Backend.
                    </li>
                    <li>
                    Github for Client side Hosting.
                    </li>
                    <li>
                    Cyclic for Server side Hosting.
                    </li>
                    <li>
                    Live Cryptocurrency Price with API.
                    </li>
                    <li>
                    MongoDB for Database.
                    </li>
                    <li>
                    Firebase Storage for Hosting Blog Images.
                    <li>
                  JWT Tokens for User Authentication.
                    </li>
                    </li>
                  </ul>
                  
                </Typography>
                <br />
                </Box>
</Grid>
<Grid item xs={12} md={5} sx={{borderRadius: '1rem', boxShadow: 3,}}>
<img src={skdigitech} alt="skdigitech" height='100%' width='100%' style={{borderRadius: '1rem'}}/>

</Grid>

            </Grid>
          </Grid>
        </>
        )
}   
