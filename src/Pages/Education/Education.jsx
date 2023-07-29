import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import fuuast from '../../Assets/Images/education/fuuast.png'
export default function Education() {
  return (
    <Grid container sx={{ px: { xs: 2, md: 6 }}}>
      <Grid item xs={12}>
        <PageHeader
          heading='Education'
        />
      </Grid>

      <Grid container sx={{ py: 4 }}>

        <Grid item xs={7}>
          <Typography variant='h5' sx={{ color: '#59BD56', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', }}>
            Bachelor's Degree in Computer Science

          </Typography>
          <Typography variant='h6' sx={{ color: '#6e45e2', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', }}>
            Federal Urdu University of Arts, Science & Technology
          </Typography>

        </Grid>

        <Grid item xs={5} display="flex" justifyContent="flex-end" >
          <Box sx={{boxShadow: 3, borderRadius: '1rem', minHeight: '100px', maxHeight: '100px'}}>
          <img src={fuuast} alt="fuuast" height='100px' width='100px' style={{borderRadius: '1rem'}}/>
          </Box>
        </Grid>

      </Grid>
    </Grid>

  )
}
