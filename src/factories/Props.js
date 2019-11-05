export const createProps = (val, names) =>
  names.map(alias => ({
    [alias]: val,
  }))
