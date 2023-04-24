import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
  
export default function Certification() {
  return (
    <Box sx={{p:4}}>
  <Grid container spacing={4} sx={{p:2}}>
      <Grid item xs={12}>
      <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
     Certification
    </Typography>
      </Grid>
      </Grid>
    <Typography variant='h5'  sx={{color: '#444'}}>
    Web & Mobile App Development
    </Typography>
    <br/>
    <Typography variant='h6'  sx={{color: '#444'}}>
Saylani Mass & IT Training Program
</Typography>
<br/>
</Box>
  )
}
