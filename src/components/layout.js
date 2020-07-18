import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

const Layout = ({ children, page }) => {
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
        {page !== '404' && <Header />}
        <main
          style={
            page === '404'
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              : {}
          }
        >
          {children}
        </main>
        <footer
          style={{
            color: themeState.toggled
              ? `var(--color-secondary-${themeState.themePreference})`
              : 'var(--initial-color-secondary)'
          }}
        >
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
          <> using Gatsby.</>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string
};

Layout.defaultProps = {
  page: ''
};

export default Layout;
