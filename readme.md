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
console.log(doctype(5)); // 'html'

console.log(doctype(4.01));
console.log(doctype('4.01t'));
console.log(doctype('4.01 Transitional'));
console.log(doctype('HTML 4.01 Transitional'));
// 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'
```

## API

### doctype(name)

Get a doctype.

Parameters:

*   `name` (`string`) — Case-insensitive, white-space insensitive name:
    stripped from white-space, casing, fractional-part of version, `'HTML'`
    or `'XHTML'` prefix, and suffixes are normalised (`Transitional` and to
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

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
