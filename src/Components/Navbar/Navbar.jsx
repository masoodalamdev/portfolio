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
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog", "Blog2"];


export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bgcolor:'#fff', color: '#444'}}>
      <Container maxWidth="xl">
      <Toolbar disableGutters>
          
        {/* <Grid container > */}
      {/* <Grid item > */}
      {/* <Link to='/' style={{textDecoration: 'none'}}> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
            Masood Alam
          </Typography> */}


          {/* MOBILE MENU  */}
          <Link to='/' style={{textDecoration: 'none'}}> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: 700,
              // letterSpacin+: ".3rem",
              color: "#444",
              textDecoration: "none",
            }}
          >
            Masood Alam
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}><NavLink to='/projects'><Button color="inherit">Projects</Button></NavLink></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><NavLink to='/skills'><Button color="inherit">Skills</Button></NavLink></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><NavLink to='/experience'><Button color="inherit">Experience</Button></NavLink></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><NavLink to='/about'><Button color="inherit">About Me</Button></NavLink></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}><NavLink to='/contact'><Button color="inherit">Contact Me</Button></NavLink></MenuItem>
               
          
          
            </Menu>
          </Box>
           {/* MOBILE MENU  */}
           {/* WEB MENU END */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "cursive",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Masood Alam
          </Typography>

          <Grid item sm>
        </Grid>
        <Grid item>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
           
             <NavLink to='/projects'><Button color="inherit">Projects</Button></NavLink>
          <NavLink to='/skills'><Button color="inherit" >Skills</Button></NavLink>
          <NavLink to='/experience'><Button color="inherit" >Experience</Button></NavLink>
          <NavLink to='/about'><Button color="inherit" >About Me</Button></NavLink>
          <NavLink to='/contact'><Button color="inherit" >Contact Me</Button></NavLink>
          </Box>
        </Grid>

           {/* WEB MENU END */}

          {/* </Link>
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
          
         
           */}
        
        </Toolbar>
        </Container>
      </AppBar>
      <Toolbar/>
    </Box>
  );
}