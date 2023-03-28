// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj<T = any> = Record<PropertyKey, T>

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
const sortBy = (key: PropertyKey) => {
  return (a: Obj, b: Obj) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)
}

//github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_keyBy
// keyBy for array only
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _keyBy = (array: Array<any>, key: PropertyKey) =>
  (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {})

// keyBy for array and object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const keyBy = (collection: Array<any> | Obj, key: PropertyKey) => {
  const c = collection || {}
  return Array.isArray(c) ? _keyBy(c, key) : _keyBy(Object.values(c), key)
}

export { sortBy, keyBy }
