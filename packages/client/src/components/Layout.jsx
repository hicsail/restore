import { NavLink, Outlet } from 'react-router-dom';

import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

import { useQuery } from '@apollo/client';
import { GET_LOGO_FULL_SVG } from '../gql.jsx';
import { Footer } from './Footer.jsx';

function NavBar() {
  const { loading, error, data } = useQuery(GET_LOGO_FULL_SVG);

  if (loading) return <p>RESTORE</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    // Elevation prop is just there to silence warning
    <AppBar position="static" color="transparent" variant="outlined" elevation={0} sx={{ margin: '0 0 4rem' }}>
      <Toolbar>
        <NavLink to="/" style={{ lineHeight: 0 }}>
          <img
            src={import.meta.env.VITE_STRAPI_URL + data.logoFullSvg.data.attributes.LogoFullSVG.data.attributes.url}
            height="48"
          />
        </NavLink>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={NavLink} to="/about" color="inherit">
          About
        </Button>
        <Button component={NavLink} to="/treatments-and-services" color="inherit">
          Treatments and Services
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
}

function Layout() {
  return (
    <>
      <NavBar />
      <Container sx={{ margin: '1rem auto' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
