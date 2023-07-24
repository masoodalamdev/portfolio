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
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="fixed" sx={{ bgcolor: '#444', color: '#fff', px: { xs: 12 } }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* <Grid container > */}
            {/* <Grid item > */}
            {/* <Link to='/' style={{textDecoration: 'none'}}> */}
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
            Masood Alam
          </Typography> */}


            {/* MOBILE MENU  */}
            <a href='/'>
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
            </a>

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
                <MenuItem onClick={handleCloseNavMenu}><a href='#projects'><Button color="inherit">Projects</Button></a></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><a href='#skills'><Button color="inherit">Skills</Button></a></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><a href='#experience'><Button color="inherit">Experience</Button></a></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><a href='#about'><Button color="inherit">About Me</Button></a></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><a href='#contact'><Button color="inherit" >Contact Me</Button></a>
                </MenuItem>



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
              <a href='#projects'>
                {/* <a
                  to="#projects"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                > */}
                  <MuiButton text="Projects"
                    sx={{ height: '64px' }}
                  />
                {/* </a> */}
                </a>
                <a href='#skills'>
                {/* <a
                 
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                > */}
                  <MuiButton text="Skills"
                    sx={{ height: '64px' }}
                  />
                {/* </a> */}
                </a>
                <a href='#experience'>
                {/* <a
                  to="/experience"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                > */}
                  <MuiButton text="Experience"
                    sx={{ height: '64px' }}
                  />
                {/* </a> */}
                </a>
                <a href='#about'>

                {/* <a
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                > */}
                  <MuiButton text="About Me"
                    sx={{ height: '64px' }}
                  />
                {/* </a> */}
                </a>
                <a href='#contact'>
                {/* <a
                  to="/#contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                > */}
                  <MuiButton text="Contact Me"
                    sx={{ height: '64px' }}
                  />
                {/* </a> */}
               </a>
              </Box>
            </Grid>

            {/* WEB MENU END */}

            {/* </Link>
        </Grid>

      <Grid item sm>
        </Grid>
      <Grid item>
      <a to='/portfolio'><Button color="inherit">Portfolio</Button></a>
          <a to='/skills'><Button color="inherit">Skills</Button></a>
          <a to='/experience'><Button color="inherit">Experience</Button></a>
          <a to='/about'><Button color="inherit">About Me</Button></a>
          <a to='/contact'><Button color="inherit">Contact Me</Button></a>

      
        </Grid>
        </Grid>
          
         
           */}

          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
}