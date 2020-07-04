import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

if (!localStorage.getItem('theme'))
  localStorage.setItem('theme', JSON.stringify({ themePreference: 'light' }));

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle-dark-theme':
      localStorage.setItem(
        'theme',
        JSON.stringify({ themePreference: 'dark' })
      );
      return { ...state, themePreference: 'dark' };
    case 'toggle-light-theme':
      localStorage.setItem(
        'theme',
        JSON.stringify({ themePreference: 'light' })
      );
      return { ...state, themePreference: 'light' };
    default:
      throw new Error('Action not implemented yet');
  }
};

function ThemeProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem('theme'));
  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
