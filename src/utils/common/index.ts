// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj<T = any> = Record<PropertyKey, T>

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
const sortBy = (key: PropertyKey) => {
  return (first: Obj, second: Obj) =>
    first[key] > second[key] ? 1 : second[key] > first[key] ? -1 : 0
}

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_keyBy
// keyBy for array only
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _keyBy = (array: any[], key: PropertyKey) =>
  (array || []).reduce(
    (reducer, element) => ({ ...reducer, [key ? element[key] : element]: element }),
    {},
  )

// keyBy for array and object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const keyBy = (collection: any[] | Obj, key: PropertyKey) => {
  const col = collection || {}
  return Array.isArray(col) ? _keyBy(col, key) : _keyBy(Object.values(col), key)
}

export { sortBy, keyBy }
