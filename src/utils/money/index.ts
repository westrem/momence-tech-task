import { currenciesMap, CurrencyISOCode } from '@westrem/currency.info'

// @ts-expect-error
const usersLocale: string = window.navigator.userLanguage ?? window.navigator.language

// https://github.com/westrem/currency.info#formatting-monetary-values
const formatMoney = (
  valueInMajorUnits: number,
  currencyISOCode: CurrencyISOCode,
  locale = usersLocale,
) =>
  Intl.NumberFormat(locale, {
    currency: currencyISOCode,
    currencyDisplay: 'narrowSymbol',
    style: 'currency',
    minimumFractionDigits: currenciesMap[currencyISOCode].defaultFractionDigits,
    maximumFractionDigits: currenciesMap[currencyISOCode].defaultFractionDigits,
  }).format(valueInMajorUnits)

function getNumberFormattingOptions(): {
  thousandsSeparator: string
  decimalSeparator: string
} {
  const formatted = new Intl.NumberFormat(usersLocale, {
    style: 'decimal',
  })
    .format(12345.12)
    .replace(/\d/g, '')

  return {
    thousandsSeparator: formatted[0],
    decimalSeparator: formatted[1],
  }
}

const { thousandsSeparator, decimalSeparator } = getNumberFormattingOptions()

export { formatMoney, thousandsSeparator, decimalSeparator }
