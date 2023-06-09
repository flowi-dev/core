"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primitives = void 0;
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
var _Types = require("./classes/Types");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable @typescript-eslint/naming-convention */
class PrimitiveTrue extends _Types.PrimitiveType {
  constructor() {
    super('true', data => data === true);
  }
}
PrimitiveTrue.register(() => new PrimitiveTrue());
const TRUE = new PrimitiveTrue();
class PrimitiveFalse extends _Types.PrimitiveType {
  constructor() {
    super('false', data => data === false);
  }
}
PrimitiveFalse.register(() => new PrimitiveFalse());
const FALSE = new PrimitiveFalse();
const BOOLEAN = new _Types.UnionType('boolean', [FALSE, TRUE]);
class PrimitiveInteger extends _Types.PrimitiveType {
  constructor() {
    super('integer', data => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
  }
}
PrimitiveInteger.register(() => new PrimitiveInteger());
const INTEGER = new PrimitiveInteger();
class PrimitiveFloat extends _Types.PrimitiveType {
  constructor() {
    super('float', data => typeof data === 'number' && !isNaN(data));
  }
}
PrimitiveFloat.register(() => new PrimitiveFloat());
const FLOAT = new PrimitiveFloat();
const NUMBER = new _Types.UnionType('number', [FLOAT, INTEGER]);
class PrimitiveString extends _Types.PrimitiveType {
  constructor() {
    super('string', data => typeof data === 'string');
  }
}
PrimitiveString.register(() => new PrimitiveString());
const STRING = new PrimitiveString();
class PrimitiveUndefined extends _Types.PrimitiveType {
  constructor() {
    super('undefined', data => data === undefined);
  }
}
PrimitiveUndefined.register(() => new PrimitiveUndefined());
const UNDEFINED = new PrimitiveUndefined();
class PrimitiveDate extends _Types.PrimitiveType {
  constructor() {
    super('date', data => data instanceof Date);
  }
}
PrimitiveDate.register(() => new PrimitiveDate());
const DATE = new PrimitiveDate();
class PrimitiveRegExp extends _Types.PrimitiveType {
  constructor() {
    super('regexp', data => data instanceof RegExp);
  }
}
PrimitiveRegExp.register(() => new PrimitiveRegExp());
const REGEXP = new PrimitiveRegExp();
class PrimitiveBigInt extends _Types.PrimitiveType {
  constructor() {
    super('bigint', data => typeof data === 'bigint');
  }
}
PrimitiveBigInt.register(() => new PrimitiveBigInt());
const BIGINT = new PrimitiveBigInt();
class PrimitiveSymbol extends _Types.PrimitiveType {
  constructor() {
    super('symbol', data => typeof data === 'symbol');
  }
}
PrimitiveSymbol.register(() => new PrimitiveSymbol());
const SYMBOL = new PrimitiveSymbol();
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