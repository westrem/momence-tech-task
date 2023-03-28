import { Container } from '@chakra-ui/react'

import { Title } from './components'
import { Exchange, Rates } from './scenes'

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

      <Exchange />
      {/*<Rates ready={ready} />*/}
    </Container>
  )
}

export default App
