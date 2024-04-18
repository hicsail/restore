import React, { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NAV_ITEMS } from '../gql.jsx';

const NavigationContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export const NavigationProvider = ({ children }) => {
  const [navItems, setNavItems] = React.useState([]);
  const [pages, setPages] = React.useState([]);
  const [init, setInit] = React.useState(false);
  const { data } = useQuery(GET_NAV_ITEMS, {
    fetchPolicy: 'cache-and-network'
  });

  const getPageId = (slug) => {
    const page = pages.find((p) => p.attributes.slug === slug);
    return page ? page.id : null;
  };

  useEffect(() => {
    if (data) {
      const navItems = data.navigation.data.attributes.nav_items.data;
      if (navItems) {
        setNavItems(navItems.map((ni) => ni.attributes).sort((a, b) => a.Order - b.Order));
      }
      const pages = data.pages.data;
      if (pages) {
        setPages(pages);
      }
      setInit(true);
    }
  }, [data]);

  return <NavigationContext.Provider value={{ navItems, getPageId, init }}>{children}</NavigationContext.Provider>;
};
export const useNav = () => useContext(NavigationContext);
