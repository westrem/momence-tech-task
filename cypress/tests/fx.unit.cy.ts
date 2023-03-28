/// <reference types="cypress" />

import { exchangeCZK } from '../../src/utils/fx'

describe('Fx', () => {
  context('exchangeCZK', () => {
    it('correctly exhanges with amount 1', () => {
      const converted = exchangeCZK(123.45, {
        country: 'Australia',
        currency: 'dollar',
        amount: 1,
        code: 'AUD',
        rate: 14.622,
      })
      expect(converted).to.eq('8.44')
    })

    it('correctly exhanges with amount 10', () => {
      // Fake currency
      const converted = exchangeCZK(123.45, {
        country: 'Middle Earth',
        currency: 'mana',
        amount: 10,
        code: 'EUR', // Fn needs real currency code
        rate: 14.622,
      })
      expect(converted).to.eq('84.43')
    })

    it('correctly exhanges with amount 100', () => {
      const converted = exchangeCZK(123.45, {
        country: 'Hungary',
        currency: 'forint',
        amount: 100,
        code: 'HUF',
        rate: 6.121,
      })
      expect(converted).to.eq('2016.83')
    })

    it('correctly exhanges with amount 1000', () => {
      const converted = exchangeCZK(123.45, {
        country: 'Indonesia',
        currency: 'rupiah',
        amount: 1000,
        code: 'IDR',
        rate: 1.454,
      })
      expect(converted).to.eq('84904')
    })
  })
})
