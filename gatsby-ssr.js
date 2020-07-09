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
    const {themePreference} = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty('--color-background', themePreference === "dark" ? '#25282f':'#ffffff');

    root.style.setProperty('--color-primary', themePreference === "dark" ? '#f8f7ff':'#2e4057');

    root.style.setProperty('--color-secondary', themePreference === "dark" ? '#f8f7ff':'#404E7C');

    root.style.setProperty('--card-background', themePreference === "dark" ? '#121212':'#fafffd');

    root.style.setProperty('--card-bg-shadow', themePreference === "dark" ? '#0d1321':'#dce1de');
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InjectScript />);
};
