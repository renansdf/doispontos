import React from 'react'
import { RouterProvider } from 'react-router-dom'

import Router from './router'
import GlobalStyle from './globalStyles'

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </>
  );
}

export default App;
