# doctype [![Build Status](https://img.shields.io/travis/wooorm/doctype.svg?style=flat)](https://travis-ci.org/wooorm/doctype) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/doctype.svg)](https://codecov.io/github/wooorm/doctype)

Information for HTML doctypes.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install doctype
```

**doctype** is also available for
[bower](http://bower.io/#install-packages), [duo](http://duojs.org/#getting-started),
and for AMD, CommonJS, and globals ([uncompressed](doctype.js) and
[compressed](doctype.min.js)).

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

### doctype(name)

Get a doctype.

Parameters:

*   `name` (`string`) — Case-insensitive, white-space insensitive name:
    stripped from white-space, casing, fractional-part of version, `'HTML'`
    or `'XHTML'` prefix, and suffixes are normalised (`Transitional` to
    `t`).

Returns: `string?` — When applicable.

### doctype.all

```js
{
  'HTML 5': 'html',
  'HTML 4.01 Strict': 'HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"',
  // ...
}
```

`Object` mapping doctype names to doctype strings. This gives raw access to
the information returned by [`doctype()`](#doctypename).

## Support

| Name                   | Doctype                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| HTML 5                 | `html`                                                                                                             |
| HTML 4.01 Strict       | `HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "<http://www.w3.org/TR/html4/strict.dtd>"`                                |
| HTML 4.01 Transitional | `HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "<http://www.w3.org/TR/html4/loose.dtd>"`                    |
| HTML 4.01 Frameset     | `HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "<http://www.w3.org/TR/html4/frameset.dtd>"`                     |
| HTML 3.2               | `HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"`                                                                     |
| HTML 3.2               | `HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"`                                                                     |
| HTML 2.0               | `HTML PUBLIC "-//IETF//DTD HTML//EN"`                                                                              |
| XHTML 1.1              | `html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "<http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd>"`                         |
| XHTML 1.0 Strict       | `html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "<http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd>"`             |
| XHTML 1.0 Transitional | `html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "<http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd>"` |
| XHTML 1.0 Frameset     | `html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "<http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd>"`         |
| XHTML 1.1              | `html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"`                           |
| XHTML Basic 1.1        | `html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd"`               |
| XHTML Basic 1.0        | `html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd"`               |
| MathML 2.0             | `math PUBLIC "-//W3C//DTD MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/mathml2.dtd"`                        |
| MathML 1.01            | `math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd"`                                                      |
| SVG 1.0                | `svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"`                  |
| SVG 1.1 Full           | `svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"`                          |
| SVG 1.1 Basic          | `svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd"`              |
| SVG 1.1 Tiny           | `svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd"`                |

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
