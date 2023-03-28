import { Text, Input, InputGroup, InputRightAddon, Stack, Skeleton, chakra } from '@chakra-ui/react'
import styled from 'styled-components'

import arrow from '../assets/arrow_bolt.png'

const commonWrapperStyling = {
  spacing: 2,
}

const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  
  &::after {
    display: block;
    position: absolute;
    width: 30px;
    height: 42px;
    right: 14px;
    bottom: -50px;
    content: "";
    background: transparent url(${arrow}) 0 0 no-repeat;
  }
`

interface Props {
  /**
   * @default false
   */
  loading?: boolean

  /**
   * @example 420,69
   */
  value: string

  onChange: (newValue: string) => void
}

function MoneyInput(props: Props) {
  const { loading = false, value, onChange } = props

  if (loading)
    return (
      <Wrapper>
        <Stack
          {...commonWrapperStyling}
          minW='305px'
        >
          <Skeleton height='24px' />
          <Skeleton height='48px' />
        </Stack>
      </Wrapper>
    )

  return (
    <Wrapper>
      <Stack {...commonWrapperStyling}>
        <chakra.label
          htmlFor='moneyIn'
          textAlign='center'
          w='100%'
        >
          <Text fontSize='md'>How much CZK do you want to exchange?</Text>
        </chakra.label>

        <InputGroup size='lg'>
          <Input
            placeholder='420,69'
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
            id='moneyIn'
            autoFocus
          />
          <InputRightAddon>CZK</InputRightAddon>
        </InputGroup>
      </Stack>
    </Wrapper>
  )
}

export { MoneyInput }
