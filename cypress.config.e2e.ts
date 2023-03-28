import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    supportFile: false,
    specPattern: 'cypress/tests/**/*.e2e.cy.{ts,tsx}',
  },
  video: true,
  videoCompression: false,
  screenshotOnRunFailure: true,
})
