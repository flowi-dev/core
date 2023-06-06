"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pin = void 0;
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.symbol.description.js");
var _Serializable = require("./Serializable");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Pin extends _Serializable.Serializable {
  constructor(name, type) {
    if (!name.endsWith('-pin')) {
      name += '-pin';
    }
    super(name);
    _defineProperty(this, "_", Pin.name);
    this.type = type;
    this.name = name;
  }
}
exports.Pin = Pin;