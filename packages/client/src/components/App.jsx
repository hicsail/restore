import { useState } from 'react'
import '../App.css'

import { Link, Outlet, useLocation } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';

import { theme } from '../theme.jsx'


function NavTabs() {
  const { pathname } = useLocation();

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={pathname} aria-label="navigation tabs">
          // TODO: FIX: when on root/index route, no tab is active.
          // (On some future routes, this may be desired behavior; nevertheless it throws an error even if it still works)
          <Tab label='About' value='/about' to='about' component={Link} />
          <Tab label='Our Team' value='/our-team' to='our-team' component={Link} />
          <Tab label='Testimonials' value='/testimonials' to='testimonials' component={Link} />
          <Tab label='Research and Evaluation' value='/research-and-evaluation' to='research-and-evaluation' component={Link} />
          <Tab label='Get Involved' value='/get-involved' to='get-involved' component={Link} />
          <Tab label='Blog' value='/blog' to='blog' component={Link} />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavTabs />
    </ThemeProvider>
  )
}

export default App
