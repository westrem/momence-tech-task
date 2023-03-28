import { currenciesMap, CurrencyISOCode } from '@westrem/currency.info'

// https://github.com/westrem/currency.info#formatting-monetary-values
const formatMoney = (
  valueInMajorUnits: number,
  currencyISOCode: CurrencyISOCode,
  // @ts-ignore
  locale: string = window.navigator.userLanguage ?? window.navigator.language,
) =>
  Intl.NumberFormat(locale, {
    currency: currencyISOCode,
    currencyDisplay: 'narrowSymbol',
    style: 'currency',
    minimumFractionDigits: currenciesMap[currencyISOCode].defaultFractionDigits,
    maximumFractionDigits: currenciesMap[currencyISOCode].defaultFractionDigits,
  }).format(valueInMajorUnits)

export { formatMoney }
