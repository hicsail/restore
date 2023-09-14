import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './components/Layout.jsx'
import AboutMission from './components/AboutMission.jsx'
import TeamMemberGrid from './components/Team.jsx'
import ResearchAndEvals from './components/Research.jsx'
import BlogPosts from './components/Blog.jsx'
import UnderConstruction from './components/UnderConstruction.jsx'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_STRAPI_URL + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_CONTENT_TOKEN
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const apolloclient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutMission />,
      },
      {
        path: "about",
        element: <AboutMission />,
      },
      {
        path: "our-team",
        element: <TeamMemberGrid />,
      },
      {
        path: "testimonials",
        element: <UnderConstruction />,
      },
      {
        path: "research-and-evaluation",
        element: <ResearchAndEvals />,
      },
      {
        path: "get-involved",
        element: <UnderConstruction />,
      },
      {
        path: "blog",
        element: <BlogPosts />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloclient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
