import { Text, Select, Stack, Skeleton, chakra } from '@chakra-ui/react'
import currenciesMap, { CurrencyISOCode } from '@westrem/currency.info'

interface Props {
  loading?: boolean

  /**
   * @example [EUR, USD, ...]
   */
  availableISOCurrencies: CurrencyISOCode[]

  /**
   * Selected currency
   * @example EUR
   */
  value: CurrencyISOCode | ''
  onChange: (newValue: CurrencyISOCode) => void
}

function CurrencySelect(props: Props) {
  const { loading, availableISOCurrencies, value, onChange } = props

  if (loading)
    return (
      <Stack
        spacing={2}
        minW='350px'
      >
        <Skeleton height='24px' />
        <Skeleton height='48px' />
      </Stack>
    )

  return (
    <Stack spacing={2}>
      <chakra.label
        htmlFor='currency'
        textAlign='center'
        w='100%'
      >
        <Text fontSize='md'>For what currency?</Text>
      </chakra.label>

      <Select
        placeholder='Choose...'
        id='currency'
        onChange={(evt) => onChange(evt.target.value as CurrencyISOCode)}
        value={value}
      >
        {availableISOCurrencies.map((currencyISO) => {
          const currencyInfo = currenciesMap[currencyISO] ?? {
            displayName: currencyISO,
            symbol: currencyISO,
          }
          return (
            <option
              key={currencyISO}
              value={currencyISO}
            >
              {currencyInfo.displayName} / {currencyISO} ({currencyInfo.symbol})
            </option>
          )
        })}
      </Select>
    </Stack>
  )
}

export { CurrencySelect }
