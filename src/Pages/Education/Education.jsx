import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function Education() {
  return (
  <>
  <Box >
  <Grid container sx={{p:2}}>
  <Grid item xs={12}>
          <PageHeader
            heading='Education'
          />
        </Grid>
     
    </Grid>
    <Typography variant='h5'  sx={{color: '#444'}}>
    Bachelor's Degree in Computer Science
    </Typography>
    <br/>
    <Typography variant='h6'  sx={{color: '#444'}}>
Federal Urdu University of Arts, Science & Technology
</Typography>
<br/>

  </Box>
    
  </>
  )
}
