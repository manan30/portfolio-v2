import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

const Layout = ({ children }) => {
  const { themeState } = useTheme();

  return (
    <>
      <GlobalStyles
        theme={themeState.themePreference}
        mounted={themeState.mounted}
      />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
