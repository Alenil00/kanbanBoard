import React, { createContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');

  const toggleColor = () => {
    setColor(prevColor => prevColor === 'black' ? 'red' : 'black');
  };

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
