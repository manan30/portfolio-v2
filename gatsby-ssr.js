const React = require('react');
const ThemeProvider = require('./src/providers/ThemeProvider').default;

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

const InjectScript = () => {
  const codeToRunOnClient = `
  (function() {
    function getColorMode() {
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
    const {themePreference} = getColorMode();
    const root = document.documentElement;

    root.style.setProperty('--initial-background-color', themePreference === "dark" ? '#25282f':'#ffffff');
    root.style.setProperty('--background-color-dark', "#25282f");
    root.style.setProperty('--background-color-light', "#f4f4f8");

    root.style.setProperty('--initial-color-primary', themePreference === "dark" ? '#91f291':'#2e4057');
    root.style.setProperty('--color-primary-dark', "#91f291");
    root.style.setProperty('--color-primary-light', "#2e4057");

    root.style.setProperty('--initial-color-secondary', themePreference === "dark" ? '#4acfab':'#404E7C');
    root.style.setProperty('--color-secondary-dark', "#4acfab");
    root.style.setProperty('--color-secondary-light', "#404E7C");

    root.style.setProperty('--initial-card-background', themePreference === "dark" ? '#121212':'#fafffd');
    root.style.setProperty('--card-background-dark', "#121212");
    root.style.setProperty('--card-background-light', "#fafffd");

    root.style.setProperty('--initial-card-background-hovered', themePreference === "dark" ? '#364156':'#fbfbff');
    root.style.setProperty('--card-background-hovered-dark', "#364156");
    root.style.setProperty('--card-background-hovered-light', "#fbfbff");

    root.style.setProperty('--initial-shadow', themePreference === "dark" ? '#0d1321':'#dce1de');
    root.style.setProperty('--shadow-dark', "#0d1321");
    root.style.setProperty('--shadow-light', "#dce1de");

    root.style.setProperty('--initial-toggle-border-color', themePreference === "dark" ? '#dce1de':'#25282f');
    root.style.setProperty('--toggle-border-color-dark', "#dce1de");
    root.style.setProperty('--toggle-border-color-light', "#25282f");

    root.style.setProperty('--initial-toggle-switch-transform', themePreference === "dark" ? '2rem':'0');
    root.style.setProperty('--toggle-switch-transform-dark', "2rem");
    root.style.setProperty('--toggle-switch-transform-light', "0");

    root.style.setProperty('--color-mode', themePreference);
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InjectScript />);
};
