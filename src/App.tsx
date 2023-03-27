import { Container } from '@chakra-ui/react'

import { Title } from './components'
import { Exchange } from './scenes'

import { useDailyFx } from './queries'

function App() {
  const { data, isLoading, isError, isSuccess } = useDailyFx()

  return (
    <Container
      maxW='490px'
      pt={16}
      centerContent
    >
      <Title />

      <Exchange ready={isSuccess} />
    </Container>
  )
}

export default App
