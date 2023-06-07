"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serializer = exports.SerializableData = exports.Serializable = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.symbol.description.js");
var _Types = require("./Types");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Defines the required data for serialization.
 */
class SerializableData {}

/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
exports.SerializableData = SerializableData;
class Serializer {
  /**
   * Deserializes a type from a json object. If the type is already in the cache, it will be retrieved from there. Otherwise, it will attempt to be created.
   */
  static deserialize(data) {
    const saved = Serializer.cache.get(data.name);
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
  static addToCache(name, type) {
    Serializer.cache.set(name, type);
  }
  static removeFromCache(name) {
    Serializer.cache.delete(name);
  }

  /**
  		 * The cache of all types that have been serialized and deserialized.
  		 */
}

/**
 * This class defines instances that can be serialized and deserialized.
 */
exports.Serializer = Serializer;
_defineProperty(Serializer, "cache", new Map());
class Serializable extends SerializableData {
  constructor(name) {
    super();
    this.name = name;
    Serializer.addToCache(name, this);
    this._ = this.constructor.name;
  }

  /**
   * The fallback function for serialization. Most types will override this function.
   */
  serialize() {
    // Update the cache
    Serializer.removeFromCache(this.name);
    Serializer.addToCache(this.name, this);

    // Only keep the properties, not the methods and convert it to a basic object instead of a class
    return _objectSpread({
      name: this.constructor.name,
      _: this.constructor.name
    }, Object.fromEntries(Object.entries(this).filter(_ref => {
      let [key] = _ref;
      return !key.startsWith('_');
    }).map(_ref2 => {
      let [key, value] = _ref2;
      return [key, value];
    })));
  }
}
exports.Serializable = Serializable;