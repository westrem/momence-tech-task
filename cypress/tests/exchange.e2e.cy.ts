/// <reference types="cypress" />

describe('Exchange page', () => {
  beforeEach(function () {
    cy.fixture('daily.txt').as('dailyInput')
    cy.intercept('https://cnb-api.westrem.sk/daily.php', this['dailyInput'])

    cy.visit('/')
  })

  it('loads', () => {
    cy.contains('How much CZK do you want to exchange?')
    cy.contains('For what currency?')
    cy.contains('at a rate').should('not.exist')
  })

  it('accepts CZK money', () => {
    cy.get('#moneyIn').type('123').should('have.value', '123')
  })

  it('allows to select currency', () => {
    cy.get('#currency').select('EUR').should('have.value', 'EUR')
  })

  it('allows to convert CZK input', () => {
    cy.get('#moneyIn').type('123')
    cy.get('#currency').select('EUR')
    cy.get('#converted')
    cy.contains('at a rate 1 EUR')
  })
})
