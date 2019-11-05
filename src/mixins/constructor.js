import { spread } from '../decorators'
import { concatenate } from '../utils'

const variadicConcatenate = spread(concatenate)

export const addConstructor = base =>
  variadicConcatenate(base, {
    constructor: {},
  })
