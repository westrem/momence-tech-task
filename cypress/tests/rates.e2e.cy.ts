/// <reference types="cypress" />

describe('Rates page', () => {
  beforeEach(function () {
    cy.fixture('daily.txt').as('dailyInput')
    cy.intercept('https://cnb-api.westrem.sk/daily.php', this['dailyInput'])

    cy.visit('/rates')
  })

  it('loads', () => {
    cy.contains('Back to Exchange')
    cy.contains('Using rates from CNB.cz')
  })

  it('contains Fx table', () => {
    cy.get('#FxTable_loaded')
    cy.contains('Currency')
    cy.contains('Amount')
    cy.contains('Rate')
    cy.contains('EUR')
  })
})
