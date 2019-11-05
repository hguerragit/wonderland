import {
  AP_ALIASES,
  FLAT_ALIASES,
  FLAT_MAP_ALIASES,
  MAP_ALIASES,
  VALUE,
} from '../../constants'
import { concatenate } from '../../utils'

import { createFactory } from '../Factory'
import { createProps } from '../Props'

function ap(id) {
  const fn = this[VALUE]
  return id.map(fn)
}

function flat() {
  return this[VALUE]
}

function flatMap(fn) {
  return this.map(fn).flat()
}

function map(fn) {
  const value = this[VALUE]
  const newValue = fn(value)

  return this.constructor.of(newValue)
}

const API = concatenate([
  createProps(ap, AP_ALIASES),
  createProps(flat, FLAT_ALIASES),
  createProps(flatMap, FLAT_MAP_ALIASES),
  createProps(map, MAP_ALIASES),
])

export const Id = createFactory(API)('Id')
