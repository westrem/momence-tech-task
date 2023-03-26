/// <reference types="cypress" />

import parser from '../../src/utils/parser'

describe('Parser', () => {
  before(() => {
    expect(parser.parse, 'parse').to.be.a('function')
  })

  it('is not implemented', () => {
    expect(parser.parse()).to.eq('not implemented')
  })
})
