/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module doctype
 * @fileoverview Information for HTML doctypes.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var doctypes = require('./index.json');

/** Get the first character of the second parameter. */
function character(_, value) {
    return value.charAt(0);
}

/** Clean and simplify a doctype name. */
function cleanDoctype(name) {
    return String(name)
        .toLowerCase()
        .replace(/([a-z]+|\d+)/, ' $1 ')
        .replace(/\.0+(?!\d)/, '')
        .replace(/\.01/, '')
        .replace(/\.2/, '')
        .replace(/\b(xhtml|html|mathml|svg|full|basic|tiny|strict|frameset|basic)\b/g, character)
        .replace(/ t(?:ransitional)?/, '')
        .replace(/\s+/g, '');
}

/*
 * Gather all doctypes as shortcodes.
 */

var shortcodes = {};
var key;

for (key in doctypes) {
    shortcodes[cleanDoctype(key)] = doctypes[key];
}

/**
 * Get a doctype from a name.
 *
 * @param {number|string} name - Doctype name.
 * @return {string?} - Doctype.
 */
function getDoctype(name) {
    var key = cleanDoctype(name);
    return shortcodes[key] || shortcodes['h' + key] || null;
}

/*
 * Ensure proper non-versioned types work:
 */

shortcodes.h = shortcodes.h5;
shortcodes.s = shortcodes['s1.1f'];
shortcodes.m = shortcodes.m2;
shortcodes.x = shortcodes['x1.1'];

/*
 * Expose.
 */

getDoctype.all = doctypes;

module.exports = getDoctype;
