import React from 'react'

import Router from './router'
import GlobalStyle from './globalStyles'

const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
