import currenciesMap from '@westrem/currency.info'

import { CNBExchangeRecord } from '../types'

/**
 * Exchanges CZK into chosen currency
 *
 * Example:
 *
 * Given
 * - Fx Record for ISK: Iceland|krona|100|ISK|15.776
 * - input of 30 CZK
 *
 * Then
 * for 100 ISK we get 15.776 CZK
 * for input 30 CZK → 30/15.776 → 1.901× → 1.901 * 100 → we get 190.1 ISK
 */
function exchangeCZK(valueCZK: number, fxRecord: CNBExchangeRecord): string {
  return ((valueCZK / fxRecord.rate) * fxRecord.amount).toFixed(
    currenciesMap[fxRecord.code].defaultFractionDigits,
  )
}

export { exchangeCZK }
