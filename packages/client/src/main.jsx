import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

import { setContext } from '@apollo/client/link/context';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';

import { NavigationProvider } from './context/navigation.context.jsx';
import { Router } from './components/Router.jsx';

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
import.meta.env.PROD &&
  persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage)
  });

const apolloclient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloclient}>
      <NavigationProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </NavigationProvider>
    </ApolloProvider>
  </React.StrictMode>
);
