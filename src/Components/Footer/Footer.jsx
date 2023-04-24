import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Followbar from '../Followbar/Followbar'

export default function Footer() {
  return (
    <>
    
    <Box
    sx={{bgcolor: '#1976d2', color: '#fff'}}
    // display="flex"
    // justifyContent="center"
    // alignItems="center"
    
    // minHeight="100vh"
  ><Stack direction='column' sx={{p:4}}>

  <Typography variant="h4" gutterBottom sx={{textAlign: 'left', color: '#fff'}}>
    Contact
   </Typography>
  <Typography variant="body" gutterBottom sx={{textAlign: 'left', color: '#fff'}}>
    Email : masood.alam.987@gmail.com
   </Typography>
  </Stack>
    <Followbar/>
    
    <Typography variant='h6' style={{textAlign: 'center'}}>
    Designed and Developed by Masood Alam - © 2023 All rights reserved </Typography>
  </Box>
  </>
  )
}
