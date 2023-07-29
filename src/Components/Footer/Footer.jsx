import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import Followbar from '../Followbar/Followbar'

export default function Footer() {

  return (
    <>
    
    <Card id="contact"
    sx={{bgcolor: '#8B13FD', color: '#fff', px:{xs:8}, py:2}}
    // display="flex"
    // justifyContent="center"
    // alignItems="center"
    
    // minHeight="100vh"
  ><Stack direction='column' sx={{py:4}}>

  <Typography variant="h4" gutterBottom sx={{textAlign: 'left', color: '#fff'}}>
    Contact
   </Typography>
  <Typography variant="body" gutterBottom sx={{textAlign: 'left', color: '#fff'}}>
    Email : <a href="mailto:masood.alam.987@gmail.com" style={{textDecoration: 'none', color: '#fff'}}>masood.alam.987@gmail.com</a>
   </Typography>
  </Stack>

    <Followbar/>
    
    <Typography variant='h6' style={{textAlign: 'center'}}>
    Designed and Developed by Masood Alam - © 2023 All rights reserved </Typography>
  </Card>

  </>
  )
}
