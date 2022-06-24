import React, { useState, useMemo, useCallback, createContext } from 'react';

export const NavigagtionContext = createContext({
  page: 'menu',
  navigate: () => {},
});

const NavigationProvider = ({ children }) => {
  const [page, setPage] = useState('menu');

  const navigate = useCallback(selectedPage => setPage(selectedPage), []);

  const value = useMemo(() => ({ page, navigate }), [page, navigate]);

  return <NavigagtionContext.Provider value={value}>{children}</NavigagtionContext.Provider>;
};

export default NavigationProvider;
