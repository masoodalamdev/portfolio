import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink,} from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bgcolor:'#fff', color: '#444'}}>
        <Toolbar>
          
        <Grid container >
      <Grid item >
      <Link to='/' style={{textDecoration: 'none'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
            Masood Alam
          </Typography>
          </Link>
        </Grid>

      <Grid item sm>
        </Grid>
      <Grid item>
      <NavLink to='/portfolio'><Button color="inherit">Portfolio</Button></NavLink>
          <NavLink to='/skills'><Button color="inherit">Skills</Button></NavLink>
          <NavLink to='/experience'><Button color="inherit">Experience</Button></NavLink>
          <NavLink to='/about'><Button color="inherit">About Me</Button></NavLink>
          <NavLink to='/contact'><Button color="inherit">Contact Me</Button></NavLink>

      
        </Grid>
        </Grid>
          
         
          
        
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </Box>
  );
}