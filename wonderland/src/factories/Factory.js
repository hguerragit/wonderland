import { VALUE } from '../constants'
import { createWrapper } from '../factories'
import { addConstructor, addToString } from '../mixins'
import { last, pipe, stringify } from '../utils'

const createOf = prototype =>
  pipe(
    createWrapper,
    Object.getOwnPropertyDescriptors,
    descriptors => Object.create(prototype, descriptors)
  )

const createPrototype = (name, API) =>
  pipe(
    addToString(name),
    addConstructor,
    Object.freeze
  )(API)

export const createFactory = API => name => {
  const prototype = createPrototype(name, API)
  const of = createOf(prototype)

  return Object.freeze({
    from: wrapper => of(wrapper[VALUE]),
    of,
  })
}
