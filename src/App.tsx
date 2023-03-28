import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Title } from './components'

function App() {
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
