import { concatenate, pipe } from '../utils'

const makeFalse = configuration => ([name, configurations]) => ({
  [name]: {
    ...configurations,
    [configuration]: false,
  },
})

const makeNonEumerable = makeFalse('enumerable')
const makeNonWritable = makeFalse('writable')

const define = descriptors => Object.defineProperties({}, descriptors)

const everyDescriptor = configurator =>
  pipe(
    Object.getOwnPropertyDescriptors,
    Object.entries,
    descriptions => descriptions.map(configurator),
    concatenate,
    define
  )

export const turnNonEnumerable = everyDescriptor(makeNonEumerable)
export const turnNonWritable = everyDescriptor(makeNonWritable)
