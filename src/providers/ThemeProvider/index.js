import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

// if (window !== undefined && !localStorage.getItem('theme'))
//   localStorage.setItem('theme', JSON.stringify({ themePreference: 'light' }));

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle-dark-theme':
      // localStorage.setItem(
      //   'theme',
      //   JSON.stringify({ themePreference: 'dark' })
      // );
      return { ...state, themePreference: 'dark' };
    case 'toggle-light-theme':
      // localStorage.setItem(
      //   'theme',
      //   JSON.stringify({ themePreference: 'light' })
      // );
      return { ...state, themePreference: 'light' };
    default:
      throw new Error('Action not implemented yet');
  }
};

// const initialState = window ? JSON.parse(localStorage.getItem('theme')) : {};
const initialState = {
  themePreference: 'light'
};

function ThemeProvider({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
