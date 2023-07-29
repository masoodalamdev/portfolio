import { Box, Card, Fade, Stack, Typography } from '@mui/material'
import React from 'react'
import Followbar from '../Followbar/Followbar'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Footer(props) {

  return (
    <>
    
    <Card id="contact"
    sx={{bgcolor: '#6e45e2', color: '#fff', px: { xs: 2, md: 6 }, py:2}}
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
  <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
  </>
  )
}
