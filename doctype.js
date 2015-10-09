(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.doctype = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "HTML 5": "html",
  "HTML 4.01 Strict": "HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"",
  "HTML 4.01 Transitional": "HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"",
  "HTML 4.01 Frameset": "HTML PUBLIC \"-//W3C//DTD HTML 4.01 Frameset//EN\" \"http://www.w3.org/TR/html4/frameset.dtd\"",
  "HTML 3.2": "HTML PUBLIC \"-//W3C//DTD HTML 3.2 Final//EN\"",
  "HTML 3.2": "HTML PUBLIC \"-//W3C//DTD HTML 3.2 Final//EN\"",
  "HTML 2.0": "HTML PUBLIC \"-//IETF//DTD HTML//EN\"",
  "XHTML 1.0 Strict": "html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"",
  "XHTML 1.0 Transitional": "html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"",
  "XHTML 1.0 Frameset": "html PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\"",
  "XHTML 1.1": "html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\""
}

},{}],2:[function(require,module,exports){
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

},{"./index.json":1}]},{},[2])(2)
});