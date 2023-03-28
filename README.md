# Momence Tech task

- [Assignment](./ASSIGNMENT.md)
- Author: Jan Jadud [gojadud.com](https://gojadud.com) | [hello@gojadud.com](mailto:hello@gojadud.com)

---

## Tech stack

- [TypeScript](https://www.typescriptlang.org/) as base language
- [Vitejs](https://vitejs.dev/) as frontend tooling
- [Prettier](https://prettier.io/) to make code pretty 💄
- [EsLint](https://eslint.org/) to have standards
- [React](https://react.dev/) as UI lib
- [React Router](https://reactrouter.com/) as Routing lib
- [React Query](https://tanstack.com/query/v3/) for async state management
- [React number format](https://s-yadav.github.io/react-number-format/docs/intro) as number input component
- [Axios](https://axios-http.com/) as HTTP client
- [Styled components](https://styled-components.com/) for styling components
- [Chakra UI](https://chakra-ui.com/) as UI component lib
- [date-fns](https://date-fns.org/) for some date helpers
- [@westrem/currency.info](https://github.com/westrem/currency.info) my own NPM package for currency handling
- [Cypress](https://www.cypress.io/) for all testing

---

# Design

You can see [design I prepared for the task at in Figma](https://www.figma.com/file/OOucBjNyK455E2B8SABgA4/Momence-Tech-Task?node-id=0%3A1&t=ATHeg6dXMhffxYgE-1) or check the exported pages in [/design](./design) folder.

# Install

In your terminal, run following commands:

```
git clone git@github.com:westrem/momence-tech-task.git momence-tech-task-jan-jadud
cd momence-tech-task-jan-jadud
yarn install
```

# Run locally

In your terminal, run following commands:

```
yarn dev
```

then open your favourite browser at [http://127.0.0.1:5173](http://127.0.0.1:5173)

Play around 🎉

# Dev stuff

For when you like to tinker in your terminal:

## Linting

There are three lint tasks available:

```
yarn lint:prettier
yarn lint:eslint
yarn lint:ts
```

To run all of them in parallel you can use:

```
yarn lint
```

## Testing

The are two types of test available:

- **unit** - tests main functions like parsing API response or Fx conversion
- **e2e** - tests actual application

To run all tests:

```
yarn test:ci
```

This will run all tests, show output in terminal and create artefacts in `/cypress` folder:

- `/cypress/videos` - recordings of all e2e test runs
- `/cypress/screenshots` - screenshots in case any test fails 🤞

To run just one type of tests, you can use following commands:

```
yarn test:run:unit
yarn test:run:e2e
```

To view the e2e tests in realtime in Cypress app, run:

```
yarn cypress:open:e2e
```

If for any reason you are unable to run tests, check out the [terminal results (screenshots)](./test-screenshots).

# API caveat

[Read more about how I approached the CNB.cz API caveat](./cnb-api-wrapper/README.md) (bad CORS headers by CNB.cz.)

# Future improvements

The code is ready to be scaled to fully-fledged application with proper directory structure, routing utilities, etc.

API has queries ready for Yearly data from CNB.cz as well, so next step could be incorporate Yearly parser and a page showing these data.

Daily API is similarly ready to accept a specific `date` - we could add a date picker in the UI and allow user to check past exchange rates.

# Questions?

I am happy to explain any technical decisions and/or answer any questions on the dedicated technical call related to this task