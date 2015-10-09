/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module doctype
 * @fileoverview Test suite for `doctype`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var doctype = require('./');

/*
 * Tests.
 */

test('doctype(name)', function (t) {
    t.deepEqual(doctype('foo'), null);

    t.deepEqual(doctype(5), 'html');
    t.deepEqual(doctype('5'), 'html');
    t.deepEqual(doctype('5.0'), 'html');
    t.deepEqual(doctype('HTML5'), 'html');
    t.deepEqual(doctype('HTML 5'), 'html');
    t.deepEqual(doctype('html 5'), 'html');

    t.deepEqual(doctype(4), 'HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"');
    t.deepEqual(doctype(4.01), 'HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"');
    t.deepEqual(doctype('4.01t'), 'HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"');
    t.deepEqual(doctype('4.01 transitional'), 'HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"');
    t.deepEqual(doctype('4.01Transitional'), 'HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"');

    t.end();
});
