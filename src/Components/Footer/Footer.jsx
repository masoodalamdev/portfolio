import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    // minHeight="100vh"
  >
    
    <Typography variant='h6' style={{position: 'relative', bottom: 0, textAlign: 'center'}}>
    Designed and Developed by Masood Alam - © 2023 All rights reserved </Typography>
  </Box>
  )
}
