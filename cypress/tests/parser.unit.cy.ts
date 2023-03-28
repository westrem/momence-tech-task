/// <reference types="cypress" />

import parser, {
  parseRecord,
  isRecord,
  checkDateHeader,
  checkDescHeader,
  parseDateHeader,
} from '../../src/utils/parser'

describe('Parser', () => {
  context('internals', () => {
    describe('checkDateHeader', () => {
      it('passes on correct input', () => {
        checkDateHeader('24 Mar 2023 #60')
      })

      it('throws on invalid input', () => {
        const callback = () => {
          checkDateHeader('24.3.2023#60')
        }
        expect(callback).to.throw('invalid date header')
      })
    })

    describe('checkDescHeader', () => {
      it('passes on correct input', () => {
        checkDescHeader('Country|Currency|Amount|Code|Rate')
      })

      it('throws on invalid input', () => {
        const callback = () => {
          checkDescHeader('Country|Currency|Code|Rate')
        }
        expect(callback).to.throw('invalid description header')
      })
    })

    describe('isRecord', () => {
      it('returns true for correct input', () => {
        const record = {
          country: 'Canada',
          currency: 'dollar',
          amount: 1,
          code: 'CAD',
          rate: 15.975,
        }

        expect(isRecord(record)).to.eq(true)
      })

      it('returns false for incorrect input', () => {
        expect(isRecord({})).to.eq(false)
        expect(isRecord(false)).to.eq(false)
        expect(isRecord(null)).to.eq(false)
        expect(isRecord(undefined)).to.eq(false)
      })
    })

    describe('parseRecord', () => {
      it('parses record on correct input', () => {
        let parsedRecord = parseRecord('Canada|dollar|1|CAD|15.975')
        expect(parsedRecord).to.deep.eq({
          country: 'Canada',
          currency: 'dollar',
          amount: 1,
          code: 'CAD',
          rate: 15.975,
        })
      })

      it('throws on invalid input', () => {
        const callback = () => {
          parseRecord('Canada|dollar|1|15.975')
        }
        expect(callback).to.throw('invalid record, mismatch in parts length')
      })
    })

    describe('parseDateHeader', () => {
      it('parses header correcly', () => {
        let parsedHeader = parseDateHeader('24 Mar 2023 #60')
        expect(parsedHeader).to.eq('24 Mar 2023')
      })
    })
  })

  context('main', () => {
    // needs to be function so that fixtures are saved to test context "this"
    before(function () {
      cy.fixture('daily.txt').as('dailyInput')
      cy.fixture('daily.json').as('dailyOutput')
      cy.fixture('dailyWithHoles.txt').as('dailyInputWithHoles')
      cy.fixture('dailyWithHoles.json').as('dailyOutputWithHoles')
      expect(parser, 'parser').to.be.a('function')
    })

    // needs to be a function so we can access fixtures
    it('parses input correctly', function () {
      const { records, date } = parser(this['dailyInput'])

      expect(date).to.eq('24 Mar 2023')
      expect(records).to.be.an('array')
      expect(records).to.deep.eq(this['dailyOutput'])

      const { records: recordsWithHoles } = parser(this['dailyInputWithHoles'])

      expect(recordsWithHoles).to.be.an('array')
      expect(recordsWithHoles).to.deep.eq(this['dailyOutputWithHoles'])
    })

    it('returns empty output on no input', () => {
      // @ts-ignore
      const { records, date } = parser()

      expect(date).to.be.null
      expect(records).to.be.an('array')
      expect(records.length).to.eq(0)

      const { records: records2, date: date2 } = parser('')

      expect(date2).to.be.null
      expect(records2).to.be.an('array')
      expect(records2.length).to.eq(0)
    })
  })
})
