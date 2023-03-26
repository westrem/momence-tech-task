import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: 'cypress/tests/**/*.{unit,e2e}.cy.{ts,tsx}',
  },
  video: false,
  screenshotOnRunFailure: false,
})
