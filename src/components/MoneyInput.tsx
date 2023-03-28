import { Text, Input, InputGroup, InputRightAddon, Stack, Skeleton, chakra } from '@chakra-ui/react'
import { NumericFormat } from 'react-number-format'
import styled from 'styled-components'

import arrow from '../assets/arrow_bolt.png'

import { decimalSeparator } from '../utils/money'

const commonStackProps = {
  spacing: 2,
}

// -------------------------------------------------------------------------------------------------------------------
// Helper components
// -------------------------------------------------------------------------------------------------------------------

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

const ChakraInput = (props: Record<PropertyKey, unknown>) => (
  <InputGroup size='lg'>
    <Input
      {...props}
      placeholder={`420${decimalSeparator}69`}
      id='moneyIn'
      autoFocus
    />
    <InputRightAddon>CZK</InputRightAddon>
  </InputGroup>
)

// -------------------------------------------------------------------------------------------------------------------
// Main component
// -------------------------------------------------------------------------------------------------------------------

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
          {...commonStackProps}
          minW='305px'
        >
          <Skeleton height='24px' />
          <Skeleton height='48px' />
        </Stack>
      </Wrapper>
    )

  return (
    <Wrapper>
      <Stack {...commonStackProps}>
        <chakra.label
          htmlFor='moneyIn'
          textAlign='center'
          w='100%'
        >
          <Text fontSize='md'>How much CZK do you want to exchange?</Text>
        </chakra.label>

        <NumericFormat
          value={value}
          customInput={ChakraInput}
          valueIsNumericString
          onValueChange={(values) => {
            onChange(values.value)
          }}
          allowNegative={false}
          allowedDecimalSeparators={[decimalSeparator]}
          decimalScale={2}
          decimalSeparator={decimalSeparator}
        />
      </Stack>
    </Wrapper>
  )
}

export { MoneyInput }
