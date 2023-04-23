import { Facebook, GitHub, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledIcon = {
  MuiIcon: {
    fontSize: '50px',
    padding: '10px'
  }
}

export default function Followbar() {
  return (
    <>

<Typography variant='h5' sx={{textAlign: 'center'}} >
      Let's Connect Digitally
    </Typography>
    <br/>
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  // minHeight="100vh"
>
<Stack direction='row' >
    <Facebook sx={StyledIcon.MuiIcon} />
    <LinkedIn  sx={StyledIcon.MuiIcon} />
    <GitHub sx={StyledIcon.MuiIcon}  />
    <YouTube sx={StyledIcon.MuiIcon} />
    <Twitter sx={StyledIcon.MuiIcon} />
    </Stack>
</Box>
    

    </>
  )
}
