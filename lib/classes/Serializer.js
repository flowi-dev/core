"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serializer = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Serializer {
  static register(type, deserialize) {
    this._register.set(type.name, deserialize);
  }

  /**
   * Serializes an instance of a class.
   *
   * ```ts
   *
   * const mySerializable = new MySerializable('foo', 42);
   * const serialized = mySerializable.serialize();
   *
   * console.log(serialized);
   *
   * // Output:
   * // {
   * // 	_: 'MySerializable',
   * // 	foo: 'foo',
   * // 	bar: 42,
   * // }
   *
   * const deserialized = Serializer.deserialize(serialized);
   *
   * console.log(deserialized);
   *
   * // Output:
   * // MySerializable {
   * // 	foo: 'foo',
   * // 	bar: 42,
   * // }
   *
   * ```
   */
  static deserialize(data) {
    const deserialize = this._register.get(data._);
    if (!deserialize) {
      throw new Error("No deserializer found for type '".concat(data._, "'"));
    }
    return deserialize(data);
  }
}
exports.Serializer = Serializer;
_defineProperty(Serializer, "_register", new Map());