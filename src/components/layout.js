import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ThemeProvider, { useTheme } from '../providers/ThemeProvider';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';

function ThemedLayout({ children, setTheme }) {
  return (
    <ThemeProvider>
      <Layout setTheme={setTheme}>{children}</Layout>
    </ThemeProvider>
  );
}

const Layout = ({ children, setTheme }) => {
  const { themeState } = useTheme();

  useEffect(() => {
    setTheme(themeState);
  }, [themeState]);

  return (
    <>
      <GlobalStyles theme={themeState.theme} />
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
