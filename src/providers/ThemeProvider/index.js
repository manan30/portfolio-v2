import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from 'react';
import useIsMobile from '../../hooks/useIsMobile';

const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle-dark-theme':
      localStorage.setItem(
        'theme',
        JSON.stringify({ themePreference: 'dark' })
      );
      return { ...state, themePreference: 'dark', toggled: true };
    case 'toggle-light-theme':
      localStorage.setItem(
        'theme',
        JSON.stringify({ themePreference: 'light' })
      );
      return { ...state, themePreference: 'light', toggled: true };
    case 'initial-theme':
      return { ...state, themePreference: action.payload };
    default:
      throw new Error('Bad Action');
  }
};

function ThemeProvider({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, {});
  const { isMobile, hasMounted } = useIsMobile();

  return (
    <ThemeContext.Provider
      value={{ themeState, themeDispatch, isMobile, hasMounted }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
