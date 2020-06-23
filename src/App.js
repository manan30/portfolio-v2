import React from 'react';
import GlobalStyles from './common/GlobalStyles';

function App({ children }) {
  return (
    <>
      <GlobalStyles />
      <>{children}</>
    </>
  );
}

export default App;
