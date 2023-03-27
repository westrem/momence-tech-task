import { Container } from '@chakra-ui/react'

import { Title } from './components'
import { Exchange, Rates } from './scenes'

import { useDailyFx } from './queries'

function App() {
  const { data, isLoading, isError, isSuccess } = useDailyFx()

  return (
    <Container
      maxW='490px'
      pt={16}
      pb={16}
      centerContent
    >
      <Title />

      {/*<Exchange ready={isSuccess} />*/}
      <Rates ready={isSuccess} />
    </Container>
  )
}

export default App
