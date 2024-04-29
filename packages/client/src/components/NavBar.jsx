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
  Menu,
  MenuItem,
  Skeleton,
  Toolbar
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { NavLink, useLocation } from 'react-router-dom';
import { GET_LOGO_FULL_SVG } from '../gql.jsx';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';

export const Logo = (props) => {
  const { loading, data } = useQuery(GET_LOGO_FULL_SVG);
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

const SITEMAP = [
  {
    id: '1',
    Link: {
      Name: 'About',
      URL: '/about'
    },
    Subpages: [
      {
        id: '1-1',
        Name: 'Our Team',
        URL: '/our-team'
      }
    ]
  },
  {
    id: '2',
    Link: {
      Name: 'Treatment & Services'
    },
    Subpages: [
      {
        id: '2-1',
        Name: 'For Patients',
        URL: '/patients'
      },
      {
        id: '2-2',
        Name: 'For Providers',
        URL: '/providers'
      },
      {
        id: '2-3',
        Name: 'For Health Systems',
        URL: '/health-systems'
      }
    ]
  },
  {
    id: '3',
    Link: {
      URL: '/community',
      Name: 'Community Engagement'
    },
    Subpages: [
      {
        id: '3-1',
        Name: 'Advisory Board',
        URL: '/advisory-board'
      }
    ]
  },
  {
    id: '4',
    Link: {
      Name: 'Research & Evaluation',
      URL: '/research-and-evaluation'
    }
  },
  {
    id: '5',
    Link: {
      Name: 'Get Involved',
      URL: '/get-involved'
    }
  },
  {
    id: '6',
    Link: {
      Name: 'Blog',
      URL: '/blog'
    }
  }
];

export const NavBar = () => {
  const navItems = SITEMAP;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/" selected={pathname === '/'}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {navItems.map((item) => (
            <>
              <ListItem key={item.id} disablePadding>
                {item.Link.URL && (
                  <ListItemButton
                    component={item.Link.URL ? NavLink : 'div'}
                    to={item.URL}
                    selected={item.Link.URL ? pathname === item.Link.URL : false}
                    target={item.Link.URL?.startsWith('http') ? '_blank' : null}
                  >
                    <ListItemText primary={item.Link.Name} />
                  </ListItemButton>
                )}
                {!item.Link.URL && <ListItemText primary={item.Link.Name} />}
              </ListItem>
              {item.Subpages &&
                item.Subpages.length > 0 &&
                item.Subpages.map((subitem) => (
                  <ListItem key={subitem.id} disablePadding sx={{ ml: 2 }}>
                    <ListItemButton component={NavLink} to={subitem.URL}>
                      <ListItemText secondary={subitem.Name} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </>
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
              {navItems.map((item) => (
                <PopupState key={item.id} variant="popover" popupId={item.Link.Name}>
                  {(popupState) => (
                    <>
                      <Button
                        {...bindTrigger(popupState)}
                        component={item.Link.URL ? NavLink : 'div'}
                        to={item.Link.URL}
                        sx={{ textTransform: 'none' }}
                        target={item.Link.URL?.startsWith('http') ? '_blank' : null}
                        endIcon={item.Subpages?.length ? <ArrowDropDownIcon /> : null}
                      >
                        {item.Link.Name}
                      </Button>
                      {item.Subpages && item.Subpages.length > 0 && (
                        <Menu {...bindMenu(popupState)}>
                          {item.Subpages.map((subitem) => (
                            <MenuItem key={subitem.id} component={NavLink} to={subitem.URL} onClick={popupState.close}>
                              {subitem.Name}
                            </MenuItem>
                          ))}
                        </Menu>
                      )}
                    </>
                  )}
                </PopupState>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
