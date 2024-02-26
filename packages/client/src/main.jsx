import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

import { setContext } from '@apollo/client/link/context';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import About from './pages/About.jsx';
import TreatmentsServices from './pages/TreatmentsServices.jsx';
import { ServicesToTheHealthSystem, ServicesToOurPatients } from './pages/TreatmentsServices.jsx';
import Team from './pages/Team.jsx';
import Testimonials from './pages/Testimonials.jsx';
import ResearchAndEvals from './pages/Research.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Blog from './pages/Blog.jsx';
import { NavigationProvider } from './context/navigation.context.jsx';
import NotFound from './pages/404.jsx';

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

const cache = new InMemoryCache();

const apolloclient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
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
        element: <About />
      },
      {
        path: 'treatments-and-services',
        element: <TreatmentsServices />,
        children: [
          {
            index: true,
            element: <ServicesToTheHealthSystem />
          },
          {
            path: 'services-to-the-health-system',
            element: <ServicesToTheHealthSystem />
          },
          {
            path: 'services-to-our-patients',
            element: <ServicesToOurPatients />
          }
        ]
      },
      {
        path: 'our-team',
        element: <Team />
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
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloclient}>
      <NavigationProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </NavigationProvider>
    </ApolloProvider>
  </React.StrictMode>
);
