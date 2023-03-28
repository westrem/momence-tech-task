import { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { CurrencyISOCode } from '@westrem/currency.info'

import { MoneyInput, Money, CurrencySelect, Disclaimer, InfoNav, NavLink } from '../components'
import { useFxContext } from '../contexts/fx'
import { exchangeCZK } from '../utils/fx'
import { formatMoney } from '../utils/money'
import { linkTo } from '../utils/routing'

function Exchange() {
  const { records, recordsMap, ready, date } = useFxContext()

  const [czk, setCZK] = useState<string>('')
  const [currency, setCurrency] = useState<CurrencyISOCode | ''>('')

  const availableISOCurrencies = records.map((record) => record.code)

  const canConvert = czk !== '' && currency !== ''

  const record = recordsMap[currency] ?? {}

  const converted = canConvert ? exchangeCZK(Number.parseFloat(czk), recordsMap[currency]) : ''
  const formatted = converted
    ? formatMoney(Number.parseFloat(converted), currency as CurrencyISOCode)
    : ''
  const snippet = canConvert ? `at a rate ${record.amount} ${currency} = ${record.rate} CZK` : ''

  return (
    <Stack
      spacing={20}
      align='center'
    >
      <Stack
        spacing={10}
        maxW='310px'
      >
        <MoneyInput
          loading={!ready}
          value={czk}
          onChange={setCZK}
        />
        <CurrencySelect
          loading={!ready}
          availableISOCurrencies={availableISOCurrencies}
          value={currency}
          onChange={setCurrency}
        />
      </Stack>
      <Money
        ready={canConvert}
        value={formatted}
        snippet={snippet}
      />

      <InfoNav position='bottom'>
        <Disclaimer date={date} />
        <NavLink to={linkTo.rates()}>View rates</NavLink>
      </InfoNav>
    </Stack>
  )
}

export { Exchange }
