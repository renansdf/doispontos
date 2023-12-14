import React from 'react'
import { RouterProvider } from 'react-router-dom'

import Router from './router'
import GlobalStyle from './globalStyles'
import { InterfaceProvider } from './utils/InterfaceHook'

const App: React.FC = () => {
  return (
    <InterfaceProvider>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </InterfaceProvider>
  );
}

export default App;
