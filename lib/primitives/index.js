"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primitives = void 0;
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
var _Types = require("../classes/Types");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable @typescript-eslint/naming-convention */
const TRUE = new _Types.PrimitiveType('true', data => data === true);
const FALSE = new _Types.PrimitiveType('false', data => data === false);
const BOOLEAN = new _Types.UnionType('boolean', [FALSE, TRUE]);
const INTEGER = new _Types.PrimitiveType('integer', data => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
const NUMBER = new _Types.UnionType('number', [new _Types.PrimitiveType('float', data => typeof data === 'number' && !isNaN(data)), INTEGER]);
const STRING = new _Types.PrimitiveType('string', data => typeof data === 'string');
const UNDEFINED = new _Types.PrimitiveType('undefined', data => data === null);
const DATE = new _Types.PrimitiveType('date', data => data instanceof Date);
const REGEXP = new _Types.PrimitiveType('regexp', data => data instanceof RegExp);
const BIGINT = new _Types.PrimitiveType('bigint', data => typeof data === 'bigint');
const SYMBOL = new _Types.PrimitiveType('symbol', data => typeof data === 'symbol');
const ANY = new _Types.AnyType();

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Primitives {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
exports.Primitives = Primitives;
_defineProperty(Primitives, "TRUE", TRUE);
_defineProperty(Primitives, "FALSE", FALSE);
_defineProperty(Primitives, "BOOLEAN", BOOLEAN);
_defineProperty(Primitives, "INTEGER", INTEGER);
_defineProperty(Primitives, "NUMBER", NUMBER);
_defineProperty(Primitives, "STRING", STRING);
_defineProperty(Primitives, "UNDEFINED", UNDEFINED);
_defineProperty(Primitives, "DATE", DATE);
_defineProperty(Primitives, "REGEXP", REGEXP);
_defineProperty(Primitives, "BIGINT", BIGINT);
_defineProperty(Primitives, "SYMBOL", SYMBOL);
_defineProperty(Primitives, "ANY", ANY);