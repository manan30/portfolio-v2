const React = require('react');
const ThemeProvider = require('./src/providers/ThemeProvider').default;

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

const InjectScript = () => {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('theme');

      if (persistedColorPreference) {
        return JSON.parse(persistedColorPreference);
      }

      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return { themePreference: mql.matches ? 'dark' : 'light' };
      }

      return { themePreference: 'light' };
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty('--initial-color-mode', colorMode.themePreference);
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InjectScript />);
};
