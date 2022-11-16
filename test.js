import assert from 'node:assert/strict'
import test from 'node:test'
import {doctype} from './index.js'

test('doctype(name)', function () {
  assert.deepEqual(doctype('foo'), null)

  assert.deepEqual(doctype(5), 'html')
  assert.deepEqual(doctype('5'), 'html')
  assert.deepEqual(doctype('5.0'), 'html')
  assert.deepEqual(doctype('HTML5'), 'html')
  assert.deepEqual(doctype('HTML 5'), 'html')
  assert.deepEqual(doctype('html 5'), 'html')
  assert.deepEqual(doctype('html'), 'html')

  assert.deepEqual(
    doctype(4),
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'
  )
  assert.deepEqual(
    doctype(4.01),
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'
  )
  assert.deepEqual(
    doctype('4.01t'),
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'
  )
  assert.deepEqual(
    doctype('4.01 transitional'),
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'
  )
  assert.deepEqual(
    doctype('4.01Transitional'),
    'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'
  )

  assert.deepEqual(
    doctype('svg'),
    'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"'
  )

  assert.deepEqual(
    doctype('m'),
    'math PUBLIC "-//W3C//DTD MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/mathml2.dtd"'
  )
})
