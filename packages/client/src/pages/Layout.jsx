import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';
import { UniversalHeader } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { NavBar } from '../components/NavBar.jsx';

// Hash links do not work well with React bc elements are often not yet
// available in DOM on load. Slightly better in Firefox than in Chrome,
// but still suboptimal. Historically people used rafgraph/react-router-hash-link
// but this is incompatible with React Router v6. React Router considers this
// issue outside its scope. So:
import HashLinkObserver from 'react-hash-link';

function Layout() {
  return (
    <>
      <HashLinkObserver />
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
