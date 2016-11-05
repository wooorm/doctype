'use strict';

/* Dependencies. */
var test = require('tape');
var doctype = require('./');

/* Tests. */
test('doctype(name)', function (t) {
  t.deepEqual(doctype('foo'), null);

  t.deepEqual(doctype(5), 'html');
  t.deepEqual(doctype('5'), 'html');
  t.deepEqual(doctype('5.0'), 'html');
  t.deepEqual(doctype('HTML5'), 'html');
  t.deepEqual(doctype('HTML 5'), 'html');
  t.deepEqual(doctype('html 5'), 'html');
  t.deepEqual(doctype('html'), 'html');

  t.deepEqual(doctype(4), 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"');
  t.deepEqual(doctype(4.01), 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"');
  t.deepEqual(doctype('4.01t'), 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"');
  t.deepEqual(doctype('4.01 transitional'), 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"');
  t.deepEqual(doctype('4.01Transitional'), 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"');

  t.deepEqual(doctype('svg'), 'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"');

  t.deepEqual(doctype('m'), 'math PUBLIC "-//W3C//DTD MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/mathml2.dtd"');

  t.deepEqual(doctype.all, require('./index.json'));

  t.end();
});
