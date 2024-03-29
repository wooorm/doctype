/**
 * Map of doctype names to doctype values.
 *
 * @type {Record<string, string>}
 */
export const doctypes = {
  'HTML 5': 'html',
  'HTML 4.01 Strict':
    'HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"',
  'HTML 4.01 Transitional':
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"',
  'HTML 4.01 Frameset':
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"',
  'HTML 3.2': 'HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"',
  'HTML 2.0': 'HTML PUBLIC "-//IETF//DTD HTML//EN"',
  'XHTML 1.0 Strict':
    'html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"',
  'XHTML 1.0 Transitional':
    'html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"',
  'XHTML 1.0 Frameset':
    'html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"',
  'XHTML 1.1':
    'html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"',
  'XHTML Basic 1.1':
    'html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd"',
  'XHTML Basic 1.0':
    'html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd"',
  'MathML 2.0':
    'math PUBLIC "-//W3C//DTD MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/mathml2.dtd"',
  'MathML 1.01': 'math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd"',
  'SVG 1.0':
    'svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"',
  'SVG 1.1 Full':
    'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"',
  'SVG 1.1 Basic':
    'svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd"',
  'SVG 1.1 Tiny':
    'svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd"'
}

// Gather all doctypes as shortcodes.
const own = {}.hasOwnProperty
/** @type {Record<string, string>} */
const shortcodes = gather()

// Ensure proper non-versioned names work:
shortcodes.h = shortcodes.h5
shortcodes.s = shortcodes['s1.1f']
shortcodes.m = shortcodes.m2
shortcodes.x = shortcodes['x1.1']

/**
 * Get a doctype from a name.
 *
 * @param {number|string} name
 *   Fuzzy doctype name which is stripped from white space, casing, fractional
 *   part of version, `'HTML'` or `'XHTML'` prefix, and whose suffixes are
 *   normalised (`Transitional` to `t`).
 * @returns {string|null}
 *   Doctype string when found.
 */
export function doctype(name) {
  const key = cleanDoctype(name)
  const html = 'h' + key
  return own.call(shortcodes, key)
    ? shortcodes[key]
    : own.call(shortcodes, html)
    ? shortcodes[html]
    : null
}

// Clean all doctypes.
function gather() {
  /** @type {Record<string, string>} */
  const codes = {}
  /** @type {keyof doctypes} */
  let key

  for (key in doctypes) {
    if (own.call(doctypes, key)) {
      codes[cleanDoctype(key)] = doctypes[key]
    }
  }

  return codes
}

/**
 * Clean and simplify a doctype name.
 *
 * @param {string|number} name
 * @returns {string}
 */
function cleanDoctype(name) {
  return String(name)
    .toLowerCase()
    .replace(/([a-z]+|\d+)/, ' $1 ')
    .replace(/\.0+(?!\d)/, '')
    .replace(/\.01/, '')
    .replace(/\.2/, '')
    .replace(
      /\b(?:xhtml|html|mathml|svg|full|basic|tiny|strict|frameset)\b/g,
      ($0) => $0.charAt(0)
    )
    .replace(/ t(?:ransitional)?/, '')
    .replace(/\s+/g, '')
}
