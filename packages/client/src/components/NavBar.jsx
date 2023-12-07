import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { NavLink, useLocation } from 'react-router-dom';
import { GET_LOGO_FULL_SVG } from '../gql.jsx';
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = [
  { name: 'About', path: '/about' },
  { name: 'Treatments and Services', path: '/treatments-and-services' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Research and Evaluation', path: '/research-and-evaluation' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Blog', path: '/blog' }
];

export const Logo = (props) => {
  const { loading, error, data } = useQuery(GET_LOGO_FULL_SVG);
  if (loading) {
    return <Skeleton variant="rectangular" width={100} height={48} />;
  }
  return (
    <Box component={NavLink} to="/" style={{ lineHeight: 0 }} {...props}>
      <img
        alt="Restore Logo"
        src={import.meta.env.VITE_STRAPI_URL + data.logoFullSvg.data.attributes.LogoFullSVG.data.attributes.url}
        height="48"
        style={{ margin: '0.25rem' }}
      />
    </Box>
  );
};

export const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {PAGES.map(({ path, name }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton component={NavLink} to={path} selected={pathname === path}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar position="static" color="transparent" variant="outlined" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Logo sx={{ mr: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {PAGES.map(({ path, name }) => (
                <Button key={name} component={NavLink} to={path} color="inherit">
                  {name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
