# doctype

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on HTML / XHTML / MathML / SVG doctypes.

## Contents

*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`doctype(name)`](#doctypename)
    *   [`doctypes`](#doctypes)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install doctype
```

In Deno with [Skypack][]:

```js
import {doctype} from 'https://cdn.skypack.dev/doctype@3?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {doctype} from 'https://cdn.skypack.dev/doctype@3?min'
</script>
```

## Use

```js
import {doctype} from 'doctype'

console.log(doctype(5)) // => 'html'

console.log(doctype(4.01))
console.log(doctype('4.01t'))
console.log(doctype('4.01 Transitional'))
console.log(doctype('HTML 4.01 Transitional'))
// => 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'

console.log(doctype('svg'))
// => 'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"'
```

## API

This package exports the following identifiers: [`doctype`](#doctypename) and
[`doctypes`](#doctypes).
There is no default export.

### `doctype(name)`

Get a doctype from a fuzzy doctype name.

###### Parameters

*   `name` (`string`, `number`)
    — fuzzy doctype name which is stripped from white space, casing, fractional
    part of version, `'HTML'` or `'XHTML'` prefix, and whose suffixes are
    normalized (`Transitional` to `t`)

###### Returns

`string?` — doctype string when found.

### `doctypes`

`Object` mapping doctype names to doctype strings.

```js
{
  'HTML 5': 'html',
  'HTML 4.01 Strict': 'HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"',
  // …
}
```

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/html-tag-names`](https://github.com/wooorm/html-tag-names)
    — list of HTML tag names
*   [`wooorm/html-element-attributes`](https://github.com/wooorm/html-element-attributes)
    — map of HTML attributes
*   [`wooorm/html-void-elements`](https://github.com/wooorm/html-void-elements)
    — list of void HTML tag-names
*   [`wooorm/property-information`](https://github.com/wooorm/property-information)
    — info on HTML, SVG, etc properties
*   [`wooorm/web-namespaces`](https://github.com/wooorm/web-namespaces)
    — map of web namespaces

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/doctype/workflows/main/badge.svg

[build]: https://github.com/wooorm/doctype/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/doctype.svg

[coverage]: https://codecov.io/github/wooorm/doctype

[downloads-badge]: https://img.shields.io/npm/dm/doctype.svg

[downloads]: https://www.npmjs.com/package/doctype

[size-badge]: https://img.shields.io/bundlephobia/minzip/doctype.svg

[size]: https://bundlephobia.com/result?p=doctype

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
