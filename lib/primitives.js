"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNDEFINED = exports.TRUE = exports.SYMBOL = exports.STRING = exports.REGEXP = exports.NUMBER = exports.INTEGER = exports.FALSE = exports.DATE = exports.BOOLEAN = exports.BIGINT = exports.ANY = void 0;
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
var _Types = require("./classes/Types");
/* eslint-disable @typescript-eslint/naming-convention */

const TRUE = new _Types.PrimitiveType('true', data => data === true);
exports.TRUE = TRUE;
const FALSE = new _Types.PrimitiveType('false', data => data === false);
exports.FALSE = FALSE;
const BOOLEAN = new _Types.UnionType('boolean', [FALSE, TRUE]);
exports.BOOLEAN = BOOLEAN;
const INTEGER = new _Types.PrimitiveType('integer', data => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
exports.INTEGER = INTEGER;
const NUMBER = new _Types.UnionType('number', [new _Types.PrimitiveType('float', data => typeof data === 'number' && !isNaN(data)), INTEGER]);
exports.NUMBER = NUMBER;
const STRING = new _Types.PrimitiveType('string', data => typeof data === 'string');
exports.STRING = STRING;
const UNDEFINED = new _Types.PrimitiveType('undefined', data => data === null);
exports.UNDEFINED = UNDEFINED;
const DATE = new _Types.PrimitiveType('date', data => data instanceof Date);
exports.DATE = DATE;
const REGEXP = new _Types.PrimitiveType('regexp', data => data instanceof RegExp);
exports.REGEXP = REGEXP;
const BIGINT = new _Types.PrimitiveType('bigint', data => typeof data === 'bigint');
exports.BIGINT = BIGINT;
const SYMBOL = new _Types.PrimitiveType('symbol', data => typeof data === 'symbol');
exports.SYMBOL = SYMBOL;
const ANY = new _Types.AnyType();
exports.ANY = ANY;