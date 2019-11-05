import { createFactory, Id, VALUE } from '../../src'

describe('createFactory()', () => {
  it('it should be a Function', () => {
    expect(typeof createFactory).toBe('function')
  })

  it('it should be unary', () => {
    expect(createFactory.length).toBe(1)
  })

  describe('factory', () => {
    let id

    it('should be an Object', () => {
      expect(typeof Id).toBe('object')
    })

    it('should be frozen', () => {
      const isFrozen = Object.isFrozen(Id)
      expect(isFrozen).toBe(true)
    })

    describe('#of()', () => {
      let of, val

      beforeEach(() => {
        val = 0
        of = Id.of
        id = of(val)
      })

      it('should be a Function', () => {
        expect(typeof of).toBe('function')
      })

      it('should wrap', () => {
        const value = id[VALUE]
        expect(value).toBe(val)
      })
    })

    describe('#from()', () => {
      let from, val, wrapper

      beforeEach(() => {
        val = 0
        wrapper = { [VALUE]: val }
        from = Id.from
        id = from(wrapper)
      })

      it('should be a Function', () => {
        expect(typeof from).toBe('function')
      })

      it('should return an Id with the same value as wrapper', () => {
        expect(id[VALUE]).toBe(val)
        expect(id[VALUE]).toBe(wrapper[VALUE])
      })

      it('should return the same as id', () => {
        const copy = from(id)
        expect(copy.toString()).toBe(id.toString()) // TODO: prove that #toString() works
      })
    })
  })
})
