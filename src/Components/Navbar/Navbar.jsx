import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, a, } from 'react-router-dom';
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MuiButton from '../MuiButton/MuiButton';
import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material';

const pages = ["Products", "Pricing", "Blog", "Blog2"];


export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const drawerWidth = 240;
  const drawer = (
    <Box>
      <Box sx={{ minHeight: '64px', maxHeight: '64px', bgcolor: '#8B13FD', display: 'flex', textAlign: 'center', alignItems: 'center'}} onClick={handleDrawerToggle}>
      <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "block", md: "none" },
                  flexGrow: 1,
                  fontFamily: "cursive",
                  fontWeight: 700,
                  // letterSpacing: ".3rem",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: 'center'
                }}
              >
                Masood Alam
              </Typography>
      </Box>
      <Divider />
      <List >
        <ListItemButton component="a" href="/" onClick={handleDrawerToggle} >
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component="a" href="#projects" onClick={handleDrawerToggle} >
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton component="a" href="#skills" onClick={handleDrawerToggle}>
          <ListItemText primary="Skills" />
        </ListItemButton>
        <ListItemButton component="a" href="#experience" onClick={handleDrawerToggle}>
          <ListItemText primary="Experience" />
        </ListItemButton>
        <ListItemButton component="a" href="#about" onClick={handleDrawerToggle}>
          <ListItemText primary="About Me" />
        </ListItemButton>
        <ListItemButton component="a" href="#contact" onClick={handleDrawerToggle}>
          <ListItemText primary="Contact" />
        </ListItemButton>

      </List>
    </Box>
  );


  return (
    <>
      <Box sx={{ flexGrow: 1, }}>
        <AppBar position="fixed" sx={{ bgcolor: '#8B13FD', color: '#fff', px: { xs: 6 } }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>




              {/* ===========WEB MENU===================  */}
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
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Masood Alam
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              
              </Box>
              {/* WEB MENU END */}
              {/* MOBILE MENU  */}

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
                  <a href='#projects'>

                    <MuiButton text="Projects"
                      sx={{ height: '64px' }}
                    />
                  </a>
                  <a href='#skills'>

                    <MuiButton text="Skills"
                      sx={{ height: '64px' }}
                    />
                  </a>
                  <a href='#experience'>

                    <MuiButton text="Experience"
                      sx={{ height: '64px' }}
                    />

                  </a>
                  <a href='#about'>


                    <MuiButton text="About Me"
                      sx={{ height: '64px' }}
                    />
                  </a>
                  <a href='#contact'>

                    <MuiButton text="Contact Me"
                      sx={{ height: '64px' }}
                    />
                    {/* </a> */}
                  </a>
                </Box>
              </Grid>

              {/* MOBILE MENU END */}



            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
      </Box>



      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}