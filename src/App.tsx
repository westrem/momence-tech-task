import { Container } from '@chakra-ui/react'

import { Title } from './components'
import { Exchange, Rates } from './scenes'

import { useFxContext } from './contexts/fx'

function App() {
  const { records, loading, errorOccured, ready } = useFxContext()

  return (
    <Container
      maxW='490px'
      pt={16}
      pb={16}
      centerContent
    >
      <Title />

      <Exchange ready={ready} />
      {/*<Rates ready={ready} />*/}
    </Container>
  )
}

export default App
