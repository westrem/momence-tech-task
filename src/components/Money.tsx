import { Heading, Text, Stack } from '@chakra-ui/react'

interface Props {
  ready?: boolean

  /**
   * Monetary value already formatted
   * @example $ 26.18
   */
  value: string

  /**
   * Funny text
   */
  snippet: string
}

function Money(props: Props) {
  const { ready, value, snippet } = props

  if (!ready) return null

  return (
    <Stack
      spacing={1}
      align='center'
    >
      <Heading
        as='h2'
        size='3xl'
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
  )
}

export { Money }
