import { generatePath } from 'react-router'

type Route<Params = void> = {
  path: string
  link: Params extends void ? () => string : (params: Params) => string
}

function createRoute<Params = void>(path: string): Route<Params> {
  return {
    path,
    // @ts-expect-error
    link: (params?: Params) => generatePath(path, params ?? {}),
  }
}

// prettier-ignore
const routes = {
  root: createRoute('/'),
  rates: createRoute('/rates'),
} as const

type RouteId = keyof typeof routes

// Use with <Route /> or router definition
// @ts-expect-error
const pathTo: Record<RouteId, string> = Object.fromEntries(
  Object.entries(routes).map(([id, route]) => [id, route.path]),
)

// Use with <Link />
// @ts-expect-error
const linkTo: {
  [R in RouteId]: (typeof routes)[R]['link']
} = Object.keys(routes).reduce((acc, key) => {
  // @ts-expect-error
  acc[key] = routes[key].link
  return acc
}, {})

export { pathTo, linkTo }
