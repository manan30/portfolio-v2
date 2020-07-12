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

    root.style.setProperty('--background-color-dark', "#25282f");
    root.style.setProperty('--background-color-light', "#f4f4f8");

    root.style.property('--color-primary-dark', "#f8f7ff");
    root.style.property('--color-primary-light', "#2e4057");

    root.style.property('--color-secondary-dark', "#f8f7ff");
    root.style.property('--color-secondary-light', "#404E7C");

    root.style.setProperty('--card-background-dark', "#121212");
    root.style.setProperty('--card-background-light', "#fafffd");

    root.style.setProperty('--shadow-dark', "#0d1321");
    root.style.setProperty('--shadow-light', "#dce1de");
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InjectScript />);
};
