const { SMART_SYMBOL } = require('./constants'),
  { isSmart, format } = require('./utils')

const splitByType = (...comps) =>
  comps.reduce(
    (acc, c) => {
      isSmart(c)
        ? (acc.smart = [...acc.smart, format(c.replace(SMART_SYMBOL, ''))])
        : (acc.dumb = [...acc.dumb, format(c)])

      return acc
    },
    { smart: [], dumb: [] }
  )

module.exports = splitByType
