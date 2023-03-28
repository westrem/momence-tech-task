import { CurrencyISOCode } from '@westrem/currency.info'
import { CNBExchangeRecord } from '../types'

const noRecords: CNBExchangeRecord[] = []
const noOutput = {
  records: noRecords,
  date: null,
}

/**
 * Parses lines from input and trims any whitespace characters
 * @param input
 */
function getLines(input: string): string[] {
  return input.split('\n').map((line) => line.trim())
}

/**
 * Checks whether the file date header comforms to API spec
 * @param header
 * @throws TypeError
 */
function checkDateHeader(header: string) {
  const check = header.match(/^\d{1,2} [a-zA-z]{3} \d{4} #\d+$/)

  if (check === null) throw new TypeError('invalid date header')
}

/**
 * Parses date header and returns date used
 *
 * Example:
 * `24 Mar 2023 #60` → `24 Mar 2023`
 *
 * @param header
 */
function parseDateHeader(header: string): string {
  return header.split('#')[0].trim()
}

/**
 * Checks whether the file description header comforms to API spec
 * @param header
 * @throws TypeError
 */
function checkDescHeader(header: string) {
  // Hardcoded string, if comparison fails it means the API on Czech National Bank has changed, and we need to adjust
  if (header !== 'Country|Currency|Amount|Code|Rate')
    throw new TypeError('invalid description header')
}

/**
 * Parses individual record into an CNBExchangeRecord object
 * @param record
 * @throws TypeError
 */
function parseRecord(record: string): CNBExchangeRecord {
  const parts = record.split('|')

  if (parts.length !== 5) throw new TypeError('invalid record, mismatch in parts length')

  const [country, currency, amount, code, rate] = parts

  return {
    country,
    currency,
    amount: parseInt(amount, 10),
    code: code as CurrencyISOCode,
    rate: parseFloat(rate),
  }
}

function isRecord(record: unknown): record is CNBExchangeRecord {
  return (
    typeof record === 'object' &&
    !!record &&
    Object.hasOwn(record, 'country') &&
    Object.hasOwn(record, 'currency') &&
    Object.hasOwn(record, 'amount') &&
    Object.hasOwn(record, 'code') &&
    Object.hasOwn(record, 'rate')
  )
}

interface ParserOutput {
  records: CNBExchangeRecord[]
  date: string | null
}

function parse(input: string): ParserOutput {
  if (!input) return noOutput

  const lines = getLines(input)

  // Minimal number of lines must be 3 to have at least one record: two headers and one record
  if (lines.length <= 3) return noOutput

  const [dateHeader, descHeader, ...recordLines] = lines

  checkDateHeader(dateHeader)
  checkDescHeader(descHeader)

  const date = parseDateHeader(dateHeader)

  const records = recordLines
    .map((record) => {
      if (!record) return false

      try {
        return parseRecord(record)
      } catch (e) {
        // eslint-disable-next-line no-console
        if (e instanceof TypeError) console.error(e.message, 'skipping', `record:`, record)
        return false
      }
    })
    .filter(isRecord)

  return {
    date,
    records,
  }
}

export default parse
export { parseRecord, isRecord, checkDateHeader, checkDescHeader, parseDateHeader }
