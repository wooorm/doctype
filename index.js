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
        .replace(/x?html /, '')
        .replace(/\.0+(?!\d)/, '')
        .replace(/\.01/, '')
        .replace(/\.2/, '')
        .replace(/ t(?:ransitional)?/, '')
        .replace(/ (strict|frameset)/, character)
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
    return shortcodes[cleanDoctype(name)] || null;
}

/*
 * Expose.
 */

getDoctype.doctypes = doctypes;

module.exports = getDoctype;
