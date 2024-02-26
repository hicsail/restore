import React, { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NAV_ITEMS } from '../gql.jsx';

const NavigationContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export const NavigationProvider = ({ children }) => {
  const [navItems, setNavItems] = React.useState([]);
  const { data } = useQuery(GET_NAV_ITEMS);

  useEffect(() => {
    if (data) {
      const navItems = data.navigation.data.attributes.nav_items.data;
      if (navItems) {
        setNavItems(navItems.map((ni) => ni.attributes).sort((a, b) => a.Order - b.Order));
      }
    }
  }, [data]);

  return <NavigationContext.Provider value={{ navItems }}>{children}</NavigationContext.Provider>;
};
export const useNav = () => useContext(NavigationContext);
