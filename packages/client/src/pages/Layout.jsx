import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';
import { UniversalHeader } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { NavBar } from '../components/NavBar.jsx';

function Layout() {
  return (
    <>
      <NavBar />
      <UniversalHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
