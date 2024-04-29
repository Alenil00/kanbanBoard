import React, { useContext } from 'react';
import ColorContext from './ColorContext';

const Header = ({ text, count }) => {
  const { color, toggleColor } = useContext(ColorContext);

  return (
    <header className="header-div" style={{ color }} onClick={toggleColor}>
      {text}
      <div className="count-div">{count}</div>
    </header>
  );
};

export default Header;
