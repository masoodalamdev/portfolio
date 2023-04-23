import React from 'react'
import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material'

export default function Contact() {
  return (
    <>
    <Grid container spacing={4} sx={{p:2}}>
    <Grid item xs={12}>

    <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color: '#444'}}>
   Contact
  </Typography>
  
    </Grid>
    </Grid>
    <div>Contact
      <br/>
        Email: masood.alam.987@gmail.com
        <br/>
        Whatsapp: +923472503500
        
    </div>
    </>
  )
}
