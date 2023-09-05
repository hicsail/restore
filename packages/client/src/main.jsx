import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
    element: <App />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloclient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
