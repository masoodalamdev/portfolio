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



export default function projects() {
  return (
    <>
      <Grid container id="projects" sx={{mt: 16}}>
      <Grid item xs={12}>
        <PageHeader
        heading='Projects'
        />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={fxcryptospot} alt="backgroundImage" width='100%' height='100%' />



        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: '10%' }} >
         
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#444', fontFamily: 'cursive' }} >
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
                  <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }} >
          <Button variant='contained' href='https://www.fxcryptospot.com' disableElevation sx={{textTransform: 'capitalize' , bgcolor: '#444', "&:hover": {bgcolor: "#444"}}}>
            Read more
          </Button>
          </Stack>
        </Grid>

      </Grid>
    </>
  )
}
