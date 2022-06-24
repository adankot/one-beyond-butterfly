import React, { useCallback, useContext } from 'react';
import { NavigagtionContext } from '../contexts/NavigationContext';

const Menu = () => {
	const { navigate } = useContext(NavigagtionContext);

  const handlePLayClick = useCallback(() => navigate('game'), [navigate]);

  return <div className="menu">
    <button onClick={handlePLayClick}>Play</button>
  </div>;
};

export default Menu;
