import { Facebook, GitHub, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Box, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledIcon = {
  MuiIcon: {
    fontSize: '50px',
    padding: '10px',
    color: '#fff',
    '&:hover':{
      position: 'relative',
      bottom: '25px',
      fontSize: '60px'
    }
  }
}

export default function Followbar() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>

      <Typography variant='h5' sx={{ textAlign: 'center' }} >
        Let's Connect Digitally
      </Typography>
      <br />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      // minHeight="100vh"
      >

        <Stack direction='row' >
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={1000}>
            <a href='https://www.facebook.com/masoodalamdev' target='_blank' >
              <Facebook sx={StyledIcon.MuiIcon} />
            </a>
          </Slide>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={1500}>

            <a href='https://www.linkedin.com/in/masoodalamdev/' target='_blank'>
              <LinkedIn sx={StyledIcon.MuiIcon} />
            </a>
          </Slide>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={2000}>

            <a href='https://github.com/masoodalamdev' target='_blank'>
              <GitHub sx={StyledIcon.MuiIcon} />
            </a>
          </Slide>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={2500}>

            <a href='https://www.youtube.com/channel/UCM93GDSr1siMcr2Lo3LXQvw' target='_blank'>
              <YouTube sx={StyledIcon.MuiIcon} />
            </a>
          </Slide>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={3000}>

            <a href='https://www.twitter.com/masoodg1998' target='_blank'>
              <Twitter sx={StyledIcon.MuiIcon} />
            </a>
          </Slide>
        </Stack>

      </Box>


    </>
  )
}
