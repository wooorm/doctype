# doctype [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Info on HTML / XHTML / MathML / SVG doctypes.

## Installation

[npm][]:

```bash
npm install doctype
```

## Usage

```js
var doctype = require('doctype')

doctype(5)
// => 'html'

doctype(4.01)
doctype('4.01t')
doctype('4.01 Transitional')
doctype('HTML 4.01 Transitional')
// => 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'

doctype('svg')
// => 'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"'
```

## API

### `doctype(name)`

Get a doctype, where `name` stripped from white-space, casing,
fractional-part of version, `'HTML'` or `'XHTML'` prefix, and
suffixes are normalised (`Transitional` to `t`).

Returns: `string?` — When applicable.

### `doctype.all`

```js
{
  'HTML 5': 'html',
  'HTML 4.01 Strict': 'HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"',
  // ...
}
```

`Object` mapping doctype names to doctype strings.  This gives raw
access to the information returned by [`doctype()`](#doctypename).

## Related

*   [`html-tag-names`](https://github.com/wooorm/html-tag-names)
    — List of HTML tag-names
*   [`html-element-attributes`](https://github.com/wooorm/html-element-attributes)
    — Map of HTML attributes
*   [`html-void-elements`](https://github.com/wooorm/html-void-elements)
    — List of void HTML tag-names
*   [`property-information`](https://github.com/wooorm/property-information)
    — Information on HTML properties
*   [`web-namespaces`](https://github.com/wooorm/web-namespaces)
    — Map of web namespaces

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/doctype.svg

[travis]: https://travis-ci.org/wooorm/doctype

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/doctype.svg

[codecov]: https://codecov.io/github/wooorm/doctype

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
