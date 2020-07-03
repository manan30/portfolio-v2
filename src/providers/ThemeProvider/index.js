import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle-dark-theme':
      return { ...state, theme: 'dark' };
    case 'toggle-light-theme':
      return { ...state, theme: 'light' };
    default:
      throw new Error('Action not implemented yet');
  }
};

function ThemeProvider({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, {
    theme: 'light'
  });

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
