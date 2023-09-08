import { useState } from 'react'
import '../App.css'

import { Link, Outlet, useLocation } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';

import { theme } from '../theme.jsx'


function NavTabs() {
  const { pathname } = useLocation();

  // If current path is / then set Tabs value prop to /about (since /about is the index route);
  // Otherwise if current path is not a tab path (a currently hypothetical scenario), set Tabs value prop to false.
  const tabPaths = ['/about', '/our-team', '/testimonials', '/research-and-evaluation', '/get-involved', '/blog'];
  const tabsVal = pathname == '/' ? '/about' : tabPaths.includes(pathname) && pathname;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabsVal} aria-label="navigation tabs">
          <Tab label='About' value='/about' to='about' component={Link} />
          <Tab label='Our Team' value='/our-team' to='our-team' component={Link} />
          <Tab label='Testimonials' value='/testimonials' to='testimonials' component={Link} />
          <Tab label='Research and Evaluation' value='/research-and-evaluation' to='research-and-evaluation' component={Link} />
          <Tab label='Get Involved' value='/get-involved' to='get-involved' component={Link} />
          <Tab label='Blog' value='/blog' to='blog' component={Link} />
        </Tabs>
      </Box>
    </Box>
  );
}


function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavTabs />
      <Outlet />
    </ThemeProvider>
  )
}

export default Layout
