import React from 'react'
import Education from '../Education/Education'
import Certification from '../Certification/Certification'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import PageHeader from '../../Components/PageHeader/PageHeader'
import code from '../../Assets/Images/code.jpg'

export default function About() {
  return (

    <>
      <Grid container id="about" sx={{ px: { xs: 8 } }}>
        <Grid item xs={12}>
          <PageHeader
            heading='About'
          />
        </Grid>


        <Grid container sx={{ py: 4 }} >
          <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center'}}>
            <img src={code} alt="code" height='200px' width='200px' style={{ borderRadius: '50%' }} />

          </Grid>
          <Grid item xs={12} md={9} sx={{ textAlign: 'justify',pl:{md:4}}}>

            <Typography variant='body' sx={{ color: '#a242fd', textAlign: 'justify', lineHeight: 2 }}>
              As a Passionate and Skilled Fullstack Web
              Developer, My Objective is to Leverage My
              Coding Expertise and Enthusiasm to Create
              Innovative Web Applications with a Strong
              Foundation in Both Front-end and Backend Development. I am Committed to
              Employing Cutting-Edge Technologies and
              Best Practices to Craft Robust and Scalable
              Solutions. Eager to Contribute my Problem Solving Abilities and Collaborative Mindset
              in a Dynamic Team Environment. I am Driven to Continuously Learn and Adapt to Industry Trends,
              Striving to Push the Boundaries of Web Development.
              My Ultimate Goal is to Deliver High-Quality Software That Delights Users and Fosters Growth for the Organization.

            </Typography>
            <br />

          </Grid>


        </Grid>






      </Grid>

    </>

  )
}
