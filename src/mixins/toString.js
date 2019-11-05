import { spread } from '../decorators'
import { concatenate, stringify } from '../utils'

const variadicConcatenate = spread(concatenate)

export const addToString = name => base =>
  variadicConcatenate(base, {
    toString() {
      const asStr = stringify(this)
      return `${name}(${asStr})`
    },
  })
