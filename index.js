'use strict'

var doctypes = require('./index.json')

module.exports = getDoctype
getDoctype.all = doctypes

// Gather all doctypes as shortcodes.
var shortcodes = gather()

// Ensure proper non-versioned types work:
shortcodes.h = shortcodes.h5
shortcodes.s = shortcodes['s1.1f']
shortcodes.m = shortcodes.m2
shortcodes.x = shortcodes['x1.1']

// Get a doctype from a name.
function getDoctype(name) {
  var key = cleanDoctype(name)
  return shortcodes[key] || shortcodes['h' + key] || null
}

// Clean and simplify a doctype name.
function cleanDoctype(name) {
  return String(name)
    .toLowerCase()
    .replace(/([a-z]+|\d+)/, ' $1 ')
    .replace(/\.0+(?!\d)/, '')
    .replace(/\.01/, '')
    .replace(/\.2/, '')
    .replace(
      /\b(xhtml|html|mathml|svg|full|basic|tiny|strict|frameset|basic)\b/g,
      character
    )
    .replace(/ t(?:ransitional)?/, '')
    .replace(/\s+/g, '')
}

// Get the first character of the second parameter.
function character(_, value) {
  return value.charAt(0)
}

// Clean all doctypes.
function gather() {
  var codes = {}
  var key

  for (key in doctypes) {
    codes[cleanDoctype(key)] = doctypes[key]
  }

  return codes
}
