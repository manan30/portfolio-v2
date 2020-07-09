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
      return { ...state, themePreference: 'dark', mounted: true };
    case 'toggle-light-theme':
      localStorage.setItem(
        'theme',
        JSON.stringify({ themePreference: 'light' })
      );
      return { ...state, themePreference: 'light', mounted: true };
    case 'initial-theme':
      return { ...state, themePreference: action.payload };
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
      themeDispatch({ type: 'initial-theme', payload: initialColorValue });
      setMounted(true);
    });
  }, []);

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
