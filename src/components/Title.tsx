import { Heading, Flex } from '@chakra-ui/react'

const commonProps = {
  size: '4xl' as const,
  as: 'h1' as const,
}

function Title() {
  return (
    <Flex mb={20}>
      <Heading {...commonProps}>Momence</Heading>
      <Heading
        {...commonProps}
        bgClip='text'
        bgGradient='linear(to-r, #F687B3, #D53F8C)'
      >
        Fx
      </Heading>
    </Flex>
  )
}

export { Title }
