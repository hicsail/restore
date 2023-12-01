import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import AboutMission from './pages/AboutMission.jsx';
import TreatmentsServices from './pages/TreatmentsServices.jsx';
import TeamMemberGrid from './pages/Team.jsx';
import Testimonials from './pages/Testimonials.jsx';
import ResearchAndEvals from './pages/Research.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import BlogPost from './pages/BlogPost.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';
import Blog from './pages/Blog.jsx';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_STRAPI_URL + '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_CONTENT_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const apolloclient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutMission />
      },
      {
        path: 'treatments-and-services',
        element: <TreatmentsServices />
      },
      {
        path: 'our-team',
        element: <TeamMemberGrid />
      },
      {
        path: 'testimonials',
        element: <Testimonials />
      },
      {
        path: 'research-and-evaluation',
        element: <ResearchAndEvals />
      },
      {
        path: 'get-involved',
        element: <GetInvolved />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id/:blogTitle',
        element: <BlogPost />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloclient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
