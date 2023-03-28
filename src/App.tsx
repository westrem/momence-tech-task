import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Title } from './components'

// import { useFxContext } from './contexts/fx'

function App() {
  // const { records, loading, errorOccured, ready } = useFxContext()

  return (
    <Container
      maxW='490px'
      py={16}
      centerContent
    >
      <Title />

      <Outlet />
    </Container>
  )
}

export default App
