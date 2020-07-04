const React = require('react');
const ThemeProvider = require('./src/providers/ThemeProvider').default;

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
