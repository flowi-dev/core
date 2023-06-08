"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serializer = exports.SerializableData = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _Types = require("./Types");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class SerializableData {}
exports.SerializableData = SerializableData;
/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Serializer {
  /**
   * Deserializes a type from a json object. If the type is already in the cache, it will be retrieved from there. Otherwise, it will attempt to be created.
   */
  static deserialize(data) {
    const saved = Serializer.cache.get(this.getKey(data));
    if (!saved) {
      switch (data._) {
        case 'ObjectType':
          // eslint-disable-next-line no-case-declarations
          const properties = {};
          for (const [key, value] of Object.entries(data.properties)) {
            properties[key] = Serializer.deserialize(value);
          }
          return new _Types.ObjectType(data.name, properties);
        case 'UnionType':
          // eslint-disable-next-line no-case-declarations
          const types = [];
          for (const value of data.types) {
            types.push(Serializer.deserialize(value));
          }
          return new _Types.UnionType(data.name, types);
        case 'ArrayType':
          // eslint-disable-next-line no-case-declarations
          const elementType = Serializer.deserialize(data.elementType);
          return new _Types.ArrayType(data.name, elementType);
        default:
          throw new Error("Unknown type ".concat(data._, ":").concat(data.name));
      }
    }
    return saved;
  }
  static addToCache(instance) {
    Serializer.cache.set(Serializer.getKey({
      name: instance.name,
      _: instance._
    }), instance);
  }
  static removeFromCache(instance) {
    Serializer.cache.delete(Serializer.getKey({
      name: instance.name,
      _: instance._
    }));
  }

  /**
   * The cache of all types that have been serialized and deserialized.
  */

  static getKey(data) {
    return "".concat(data._, ":").concat(data.name);
  }
}
exports.Serializer = Serializer;
_defineProperty(Serializer, "cache", new Map());