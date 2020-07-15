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
        themePreference={themeState.themePreference}
        toggled={themeState.toggled}
      />
      <div
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <Header />
        <main>{children}</main>
        <footer style={{ margin: '0 1rem 0.5rem auto' }}>
          <span role="img" aria-label="copyright-symbol">
            ©️
          </span>
          &nbsp;Manan Joshi. Made with&nbsp;
          <span
            role="img"
            aria-label="beating-heart-emoji"
            style={{ fontSize: '0.8rem' }}
          >
            💗
          </span>
          &nbsp;&nbsp;using Gatsby.
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
