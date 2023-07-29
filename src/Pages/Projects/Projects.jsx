import { Box, Card, CardContent, Chip, Grid, Stack, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import softwarenapps from '../../Assets/Images/projects/softwarenapps.png'
import pakistaneservices from '../../Assets/Images/projects/pakistaneservices.png'
import fxcryptospot from '../../Assets/Images/projects/fxcryptospot.png'
import modernfashiongirl from '../../Assets/Images/projects/modernfashiongirl.png'
import pakeservicesapp from '../../Assets/Images/projects/pakeservicesapp.png'
import omniteknologies from '../../Assets/Images/projects/omniteknologies.png'
import { Link } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader/PageHeader';
import MuiButton from '../../Components/MuiButton/MuiButton';



export default function projects() {
  return (
    <>
      <Grid container id="projects" sx={{px:{xs:8} }}>
        
      <Grid item xs={12}>
        <PageHeader
        heading='Projects'
        />
        </Grid>
        <Grid container spacing={2} sx={{py:4 }}>
        <Grid item xs={12} md={8}>
          <img src={fxcryptospot} alt="backgroundImage" width='100%' height='100%' />

        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: '10%' }} >
         
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: '#444', fontFamily: 'inherit', fontWeight: 'bold' }} >
            Forex Crypto Spot App
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#444' }} >
            React Js Blog App with Authentication and Admin Dashboard
          </Typography>
          <br />
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }} >

                    <Chip color="primary" size="small" label="React Js" variant='outlined' />
                    <Chip color="primary" size="small" label="Node Js" variant='outlined' />
                    <Chip color="primary" size="small" label="Mongo DB" variant='outlined' />
                  </Stack>
                  <br/>
                  {/* <Stack direction='row' sx={{p:2}}>
    <Button href="" variant='outlined' sx={{display: 'flex', margin: '0 auto', bgcolor: '#8B13FD', color: '#fff', borderColor: '#8B13FD', textTransform: 'capitalize', '&:hover': {color: '#8B13FD', borderColor: '#8B13FD'}}}>
      
    </Button>
    </Stack> */}
    <Stack direction='row' sx={{p:2, justifyContent: 'center'}}>
    <MuiButton
    text='Live Preview'
    href='https://www.fxcryptospot.com'
    />
    </Stack>
        </Grid>
        </Grid>
      </Grid>
    </>
  )
}
