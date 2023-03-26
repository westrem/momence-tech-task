interface CNBExchangeRecord {
  /**
   * Name of the country/region where the currency is used
   * @example Canada
   * @example EMU
   */
  country: string

  /**
   * Human-readable name of the currency
   * @example euro
   */
  currency: string

  /**
   * How many units of the currency should be used for the exchange rate
   * @example 1
   * @example 100
   */
  amount: number

  /**
   * ISO 4217 currency code
   * @example EUR
   */
  code: string

  /**
   * Exchange rate
   * @example 23.680
   */
  rate: number
}

export type { CNBExchangeRecord }
