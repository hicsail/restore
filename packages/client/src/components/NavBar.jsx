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
import { useNav } from '../context/navigation.context.jsx';
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

export const NavBar = () => {
  const { navItems } = useNav();
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
                <ListItemButton
                  component={NavLink}
                  to={item.URL}
                  selected={pathname === item.URL}
                  target={item.Link.URL?.startsWith('http') ? '_blank' : null}
                >
                  <ListItemText primary={item.Link.Name} />
                </ListItemButton>
              </ListItem>
              {item.Subpages &&
                item.Subpages.length > 0 &&
                item.Subpages.map((subitem) => (
                  <ListItem key={subitem.id} disablePadding sx={{ ml: 2 }}>
                    <ListItemButton component={NavLink} to={subitem.URL} selected={pathname === subitem.URL}>
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
                        component={NavLink}
                        to={item.Link.URL}
                        color="inherit"
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
