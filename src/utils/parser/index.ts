import { CNBExchangeRecord } from '../types'

const noRecords: CNBExchangeRecord[] = []

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
    code,
    rate: parseFloat(rate),
  }
}

function isRecord(record: any): record is CNBExchangeRecord {
  return (
    typeof record === 'object' &&
    !!record &&
    record.hasOwnProperty('country') &&
    record.hasOwnProperty('currency') &&
    record.hasOwnProperty('amount') &&
    record.hasOwnProperty('code') &&
    record.hasOwnProperty('rate')
  )
}

function parse(input: string): CNBExchangeRecord[] {
  if (!input) return noRecords

  const lines = getLines(input)

  // Minimal number of lines must be 3 to have at least one record: two headers and one record
  if (lines.length <= 3) return noRecords

  const [dateHeader, descHeader, ...records] = lines

  checkDateHeader(dateHeader)
  checkDescHeader(descHeader)

  return records
    .map((record) => {
      try {
        return parseRecord(record)
      } catch (e) {
        if (e instanceof TypeError) console.log(e.message, 'skipping', `record:`, record)
        return false
      }
    })
    .filter(isRecord)
}

export default parse
export { parseRecord, isRecord, checkDateHeader, checkDescHeader }
