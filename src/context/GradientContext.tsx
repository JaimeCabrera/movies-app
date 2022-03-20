import React from 'react';

import {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (color: ImageColors) => void;
  setPrevMainColors: (color: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);
// provider
export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (color: ImageColors) => {
    setColors(color);
  };
  const setPrevMainColors = (color: ImageColors) => {
    setPrevColors(color);
  };
  return (
    <GradientContext.Provider
      value={{colors, prevColors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
