import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query'

import { ChakraProvider } from '@chakra-ui/react'

import { FxContextProvider } from './contexts/fx'
import App from './App'
import './index.css'

// ----------------------------------------------------------------------------------------
// react-query
// ----------------------------------------------------------------------------------------
const queryClient = new QueryClient()

// ----------------------------------------------------------------------------------------
// react mounting
// ----------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <FxContextProvider>
          <App />
        </FxContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
