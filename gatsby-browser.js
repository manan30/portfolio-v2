import React from 'react';
import ThemeProvider from './src/providers/ThemeProvider';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
