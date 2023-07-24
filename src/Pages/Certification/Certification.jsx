import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function Certification() {
  return (
    <Box >
      <Grid container >
      <Grid item xs={12}>
          <PageHeader
            heading='Certification'
          />
        </Grid>
        
      </Grid>
      <Typography variant='h5' sx={{ color: '#444'}}>
        Web & Mobile App Development
      </Typography>
      <br />
      <Typography variant='h6' sx={{ color: '#444'}}>
        Saylani Mass & IT Training Program
      </Typography>
      <br />
      <Typography variant='h5' sx={{ color: '#444'}}>
        HTML, CSS, Javascript, React Js
      </Typography>
      <br />
      <Typography variant='h6' sx={{ color: '#444'}}>
        Sololearn
      </Typography>
      <br />
    </Box>
  )
}
