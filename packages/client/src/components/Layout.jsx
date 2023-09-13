import { useState } from 'react'

import { NavLink, Outlet} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { theme } from '../theme.jsx'



function NavBar() {
  return (
      // Elevation prop is just there to silence warning
      <AppBar position="static" color="transparent" variant="outlined" elevation={0}>
          <Toolbar>
              <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1 }}>
                  Restore
              </Typography>
              <Button component={NavLink} to="/about" color="inherit">
                  About
              </Button>
              <Button component={NavLink} to="/our-team" color="inherit">
                  Our Team
              </Button>
              <Button component={NavLink} to="/testimonials" color="inherit">
                  Testimonials
              </Button>
              <Button component={NavLink} to="/research-and-evaluation" color="inherit">
                  Research and Evaluation
              </Button>
              <Button component={NavLink} to="/get-involved" color="inherit">
                  Get Involved
              </Button>
              <Button component={NavLink} to="/blog" color="inherit">
                  Blog
              </Button>
          </Toolbar>
      </AppBar>
  );
};


function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container sx={{ margin: '1rem auto' }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
