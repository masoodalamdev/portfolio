import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import PageHeader from '../../Components/PageHeader/PageHeader'
import smit from '../../Assets/Images/certification/smit.png'
import sololearn from '../../Assets/Images/certification/sololearn.png'
export default function Certification() {
  return (
      <Grid container sx={{px:{xs:8}}}>
      <Grid item xs={12}>
          <PageHeader
            heading='Certification'
          />
        </Grid>

        <Grid container sx={{ py: 4 }} spacing={4}>
       
          
        <Grid item xs={7}>
          <Typography variant='h5' sx={{ color: '#8B13FD', fontWeight: 'bold' }}>
          Web & Mobile App Development

          </Typography>
          <Typography variant='h6' sx={{ color: '#a242fd', fontWeight: 'bold' }}>
          Saylani Mass & IT Training Program
          </Typography>

        </Grid>
        <Grid item xs={5} display="flex" justifyContent="flex-end">
        <Box sx={{boxShadow: 3, borderRadius: '1rem', minHeight: '100px', maxHeight: '100px'}}>
        <img src={smit} alt="fuuast" height='100px' width='100px' style={{borderRadius: '1rem'}} />
          </Box>

        </Grid>

        </Grid>
        <Grid container sx={{ py: 4 }} spacing={4}>
       
          
        <Grid item xs={7}>
          <Typography variant='h5' sx={{ color: '#8B13FD', fontWeight: 'bold' }}>
          HTML, CSS, Javascript, React Js, Redux

          </Typography>
          <Typography variant='h6' sx={{ color: '#a242fd', fontWeight: 'bold' }}>
          Sololearn
          </Typography>

        </Grid>
        <Grid item xs={5} display="flex" justifyContent="flex-end">
        <Box sx={{boxShadow: 3, borderRadius: '1rem', minHeight: '100px', maxHeight: '100px'}}>
        <img src={sololearn} alt="fuuast" height='100px' width='100px' style={{borderRadius: '1rem'}} />
          </Box>

        </Grid>

        </Grid>
     
      </Grid>
    
  )
}
