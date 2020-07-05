import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from 'react';

const ThemeContext = createContext();

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
      throw new Error('Bad Action');
  }
};

function ThemeProvider({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, {});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const root = window.document.documentElement;
      const initialColorValue = root.style.getPropertyValue(
        '--initial-color-mode'
      );

      if (initialColorValue === 'light')
        themeDispatch({ type: 'toggle-light-theme' });
      else themeDispatch({ type: 'toggle-dark-theme' });
    });
    setMounted(true);
  }, []);

  return mounted ? (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  ) : (
    <div />
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
