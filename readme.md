# doctype [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Info on HTML / XHTML / MathML / SVG doctypes.

## Installation

[npm][]:

```bash
npm install doctype
```

## Usage

```js
console.log(doctype(5));
// 'html'

console.log(doctype(4.01));
console.log(doctype('4.01t'));
console.log(doctype('4.01 Transitional'));
console.log(doctype('HTML 4.01 Transitional'));
// 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'

console.log(doctype('svg'));
// 'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"'
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

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/doctype.svg

[travis]: https://travis-ci.org/wooorm/doctype

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/doctype.svg

[codecov]: https://codecov.io/github/wooorm/doctype

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com
