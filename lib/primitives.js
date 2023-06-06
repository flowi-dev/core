"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRUE = exports.STRING = exports.NUMBER = exports.NULL = exports.INTEGER = exports.FALSE = exports.BOOLEAN = exports.ANY = void 0;
var _Type = require("./classes/Type");
/* eslint-disable @typescript-eslint/naming-convention */

const TRUE = new _Type.PrimitiveType('true', data => data === true);
exports.TRUE = TRUE;
const FALSE = new _Type.PrimitiveType('false', data => data === false);
exports.FALSE = FALSE;
const BOOLEAN = new _Type.UnionType('boolean', [TRUE, FALSE]);
exports.BOOLEAN = BOOLEAN;
const INTEGER = new _Type.PrimitiveType('integer', data => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
exports.INTEGER = INTEGER;
const NUMBER = new _Type.UnionType('number', [new _Type.PrimitiveType('float', data => typeof data === 'number' && !isNaN(data)), INTEGER]);
exports.NUMBER = NUMBER;
const STRING = new _Type.PrimitiveType('string', data => typeof data === 'string');
exports.STRING = STRING;
const NULL = new _Type.PrimitiveType('null', data => data === null);
exports.NULL = NULL;
const ANY = new _Type.AnyType();
exports.ANY = ANY;