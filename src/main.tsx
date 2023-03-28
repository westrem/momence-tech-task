import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'

import { ChakraProvider } from '@chakra-ui/react'

import { FxContextProvider } from './contexts/fx'
import { Exchange, Rates } from './scenes'
import App from './App'

import { pathTo } from './utils/routing'

import './index.css'

// ----------------------------------------------------------------------------------------
// react-query
// ----------------------------------------------------------------------------------------
const queryClient = new QueryClient()

// ----------------------------------------------------------------------------------------
// react-router
// ----------------------------------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: pathTo.root,
    element: <App />,
    children: [
      { index: true, element: <Exchange /> },
      { path: pathTo.rates, element: <Rates /> },
    ],
  },
])

// ----------------------------------------------------------------------------------------
// react mounting
// ----------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <FxContextProvider>
          <RouterProvider router={router} />
        </FxContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
