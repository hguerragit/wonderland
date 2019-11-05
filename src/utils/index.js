// ARRAYS
export const last = arr => arr[arr.length - 1]

// FUNCTIONS
export const pipe = (...fns) => (...params) =>
  fns.reduce((value, fn, i) => (i === 0 ? fn(...value) : fn(value)), params)

// OBJECTS
export const concatenate = objs => Object.assign({}, ...objs)
export const stringify = value =>
  typeof value !== 'object'
    ? value.toString()
    : JSON.stringify(value, (key, val) =>
        typeof val === 'function' ? val.toString() : val
      )

// TESTS
export const trace = (message = '') => val => {
  console.log(`${message}:`)
  console.log(val)
  return val
}
