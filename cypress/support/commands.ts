/// <reference types="cypress" />

// Shortcut for cy.getByCustomData('test')
Cypress.Commands.add('getByDataTest', (selector, ...args) => {
  return cy.get(`[data-test="${selector}"]`, ...args)
})

declare global {
  namespace Cypress {
    interface Chainable {
      getByDataTest(selector: string): Chainable<void>
    }
  }
}
