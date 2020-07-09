// const React = require('react');
// const { Helmet } = require('react-helmet');
// const {
//   default: wrapWithProvider
// } = require('./src/providers/wrapWithProvider');

import React from 'react';
import ThemeProvider from './src/providers/ThemeProvider';

// exports.wrapRootElement = wrapWithProvider;
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

// const InjectScript = () => {
//   const codeToRunOnClient = `
//   (function() {
//     function getInitialColorMode() {
//       const persistedColorPreference = window.localStorage.getItem('theme');

//       if (persistedColorPreference) {
//         return JSON.parse(persistedColorPreference);
//       }

//       const mql = window.matchMedia('(prefers-color-scheme: dark)');
//       const hasMediaQueryPreference = typeof mql.matches === 'boolean';
//       if (hasMediaQueryPreference) {
//         return { themePreference: mql.matches ? 'dark' : 'light' };
//       }

//       return { themePreference: 'light' };
//     }
//     const colorMode = getInitialColorMode();
//     const root = document.documentElement;

//     root.style.setProperty('--initial-color-mode', colorMode.themePreference);
//   })()`;
//   // eslint-disable-next-line react/no-danger
//   return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
// };

// exports.onRenderBody = ({
//   setPreBodyComponents,
//   setHeadComponents,
//   setHtmlAttributes,
//   setBodyAttributes
// }) => {
//   // const helmet = Helmet.renderStatic();
//   // setHtmlAttributes(helmet.htmlAttributes.toComponent());
//   // setHeadComponents([
//   //   helmet.title.toComponent(),
//   //   helmet.link.toComponent(),
//   //   helmet.meta.toComponent(),
//   //   helmet.noscript.toComponent(),
//   //   helmet.script.toComponent(),
//   //   helmet.style.toComponent()
//   // ]);
//   setPreBodyComponents(<InjectScript />);
//   // setBodyAttributes(helmet.bodyAttributes.toComponent());
// };

// exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   const headComponents = getHeadComponents();

//   headComponents.sort((x, y) => {
//     if (x.props && x.props['data-react-helmet']) {
//       return -1;
//     }
//     if (y.props && y.props['data-react-helmet']) {
//       return 1;
//     }
//     return 0;
//   });

//   console.log(headComponents);

//   replaceHeadComponents(headComponents);
// };
