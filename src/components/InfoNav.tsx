import { PropsWithChildren } from 'react'
import { Container } from '@chakra-ui/react'

interface Props {
  /**
   * Determines margins
   */
  position: 'top' | 'bottom'
}

function InfoNav(props: PropsWithChildren<Props>) {
  const { children, position } = props

  return (
    <Container
      {...(position === 'top' ? { mb: 12 } : { mt: 24 })}
      centerContent
    >
      {children}
    </Container>
  )
}

export { InfoNav }
