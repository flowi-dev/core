"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serializable = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.symbol.description.js");
var _Type = require("./Type");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
class Serializable {
  /**
   * The cache of all types that have been serialized and deserialized.
   */
  /**
   * Deserialize a type from a serialized object.
   *
   * ```json
   {
   	"name": "object",
   	"_": "ObjectType",
   	"properties": {
   	  "username": {
   	    "name": "string",
   	    "_": "PrimitiveType",
   	  },
   	  "password": {
   	    "name": "string",
   	    "_": "PrimitiveType",
   	  },
   	  "age": {
   	    "name": "integer",
   	    "_": "PrimitiveType",
   	  },
   	  "address": { ... }
    }
   *```
   *
   * ```ts
   const deserialized = Serializable.deserialize({...});
   console.log(deserialized);
   // ObjectType {
   //   name: 'object',
   //   properties: {
   //     username: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
   //     password: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
   //     age: PrimitiveType { name: 'integer', validator: [Function (anonymous)] },
   //     address: ObjectType {
   //       name: 'address',
   //       properties: {
   //         street: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
   //         city: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
   //         coordinates: ArrayType {
   //           name: 'coordinates',
   //           elementType: PrimitiveType { name: 'number', validator: [Function (anonymous)] }
   //         }
   //       }
   //     }
   //   }
   // }
   * ```
   */

  static deserialize(data) {
    const saved = Serializable.cache.get(data.name);
    if (!saved) {
      switch (data._) {
        case 'ObjectType':
          // eslint-disable-next-line no-case-declarations
          const properties = {};
          for (const [key, value] of Object.entries(data.properties)) {
            properties[key] = Serializable.deserialize(value);
          }
          return new _Type.ObjectType(data.name, properties);
        case 'UnionType':
          // eslint-disable-next-line no-case-declarations
          const types = [];
          for (const value of data.types) {
            types.push(Serializable.deserialize(value));
          }
          return new _Type.UnionType(data.name, types);
        case 'ArrayType':
          // eslint-disable-next-line no-case-declarations
          const elementType = Serializable.deserialize(data.elementType);
          return new _Type.ArrayType(data.name, elementType);
        default:
          throw new Error("Unknown type ".concat(data._, ":").concat(data.name));
      }
    }
    return saved;
  }
  static remove(name) {
    Serializable.cache.delete(name);
  }
  constructor(name) {
    Serializable.cache.set(name, this);
  }

  /**
   * The fallback function for serialization. Most types will override this function.
   */
  serialize() {
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
_defineProperty(Serializable, "cache", new Map());