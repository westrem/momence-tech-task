import { Stack } from '@chakra-ui/react'

import { MoneyInput, Money, CurrencySelect, Disclaimer, InfoNav } from '../components'

import { BaseSceneProps } from './types'

function Exchange(props: BaseSceneProps) {
  const { ready = false } = props

  return (
    <Stack spacing={20}>
      <Stack spacing={10}>
        <MoneyInput
          loading={!ready}
          value=''
          onChange={() => {}}
        />
        <CurrencySelect
          loading={!ready}
          availableISOCurrencies={['EUR', 'USD']}
          value='EUR'
          onChange={() => {}}
        />
      </Stack>
      <Money
        ready={ready}
        value='$ 26.18'
        snippet='Feeling rich, are we?'
      />

      <InfoNav position='bottom'>
        <Disclaimer />
      </InfoNav>
    </Stack>
  )
}

export { Exchange }
