import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from './components/Layout.jsx';
import AboutMission from './pages/AboutMission.jsx';
import TreatmentsServices from './pages/TreatmentsServices.jsx';
import TeamMemberGrid from './pages/Team.jsx';
import ResearchAndEvals from './pages/Research.jsx';
import BlogPosts from './pages/Blog.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';

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
        element: <AboutMission />
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
        element: <UnderConstruction />
      },
      {
        path: 'research-and-evaluation',
        element: <ResearchAndEvals />
      },
      {
        path: 'get-involved',
        element: <UnderConstruction />
      },
      {
        path: 'blog',
        element: <BlogPosts />
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
