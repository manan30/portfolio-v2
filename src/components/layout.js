import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ThemeProvider, { useTheme } from '../providers/ThemeProvider';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

function ThemedLayout({ children, setTheme }) {
  console.log('ThemedLayout', { children });
  return (
    <ThemeProvider>
      <Layout setTheme={setTheme}>{children}</Layout>
    </ThemeProvider>
  );
}

const Layout = ({ children, setTheme }) => {
  const { themeState } = useTheme();

  useEffect(() => {
    if (setTheme) setTheme(themeState);
  }, [themeState]);

  console.log('Layout', { children });

  return (
    <>
      <GlobalStyles theme={themeState.themePreference} />
      <Header />
      <main>{children}</main>
    </>
  );
};

ThemedLayout.propTypes = {
  children: PropTypes.node.isRequired
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemedLayout;
