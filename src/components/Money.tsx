import { Heading, Text, Stack } from '@chakra-ui/react'
import styled from 'styled-components'

import arrow from '../assets/arrows_triple_down.png'

// -------------------------------------------------------------------------------------------------------------------
// Helper components
// -------------------------------------------------------------------------------------------------------------------

const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  
  &::before {
    display: block;
    position: absolute;
    width: 30px;
    height: 38px;
    left: calc(50% - 15px);
    top: -64px;
    content: "";
    background: transparent url(${arrow}) 0 0 no-repeat;
  }
`

// -------------------------------------------------------------------------------------------------------------------
// Main component
// -------------------------------------------------------------------------------------------------------------------

interface Props {
  ready?: boolean

  /**
   * Monetary value already formatted
   * @example $ 26.18
   */
  value: string

  /**
   * Info text
   */
  snippet: string
}

function Money(props: Props) {
  const { ready, value, snippet } = props

  if (!ready) return null

  return (
    <Wrapper>
      <Stack
        spacing={1}
        align='center'
      >
        <Heading
          as='h2'
          size='3xl'
          id='converted'
        >
          {value}
        </Heading>
        <Text
          fontSize='md'
          color='gray.400'
          m={0}
        >
          {snippet}
        </Text>
      </Stack>
    </Wrapper>
  )
}

export { Money }
