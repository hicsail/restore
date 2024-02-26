import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NAV_ITEMS } from '../gql.jsx';

const NavigationContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export const NavigationProvider = ({ children }) => {
  const [navItems, setNavItems] = React.useState([]);
  const { data } = useQuery(GET_NAV_ITEMS);

  useEffect(() => {
    if (data) {
      const navItems = data.navigation.data.attributes.navItems;
      setNavItems(navItems);
    }
  }, [data]);

  return <NavigationContext.Provider value={{ navItems }}>{children}</NavigationContext.Provider>;
};
