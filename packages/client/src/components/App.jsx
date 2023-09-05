import { useState } from 'react'
import '../App.css'

import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';

import { theme } from '../theme.jsx'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Our Team" {...a11yProps(1)} />
          <Tab label="Testimonials" {...a11yProps(2)} />
          <Tab label="Research and Evaluation" {...a11yProps(3)} />
          <Tab label="Get Involved" {...a11yProps(4)} />
          <Tab label="Blog" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Outlet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Outlet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Outlet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Outlet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Outlet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Outlet />
      </CustomTabPanel>
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
