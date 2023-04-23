import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Education() {
  return (
  <>
  <Box>
  <Grid container spacing={4} sx={{p:2}}>
      <Grid item xs={12}>

      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     Education
    </Typography>
    </Grid>
    </Grid>
    <Typography variant='h4'>
    Bachelor's Degree in Computer Science
    </Typography>
    <br/>
    <Typography variant='h6'>
Federal Urdu University of Arts, Science & Technology
</Typography>
<br/>

  </Box>
    
  </>
  )
}
