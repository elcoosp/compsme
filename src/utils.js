const { SMART_SYMBOL } = require('./constants')
module.exports = {
  // Check if is a  dmart/dumb component
  isSmart: s => s.endsWith(SMART_SYMBOL),
  // Capitalize component name
  format: s => s.charAt(0).toUpperCase() + s.substring(1),
  // Compose promise
  composeP: (...fns) => init => fns.reduce((acc, f) => acc.then(f), init),
  // Retrieve a key provided as a template literal from o (object)
  get: ([k]) => o => o[k],

  // Retrieve only the file name + extension from a path
  getFileName: s => s.replace(/^.*[\\\/]/, '')
}
