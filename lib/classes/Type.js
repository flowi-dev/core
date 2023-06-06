"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnionType = exports.UnionIntersectionType = exports.Type = exports.PrimitiveType = exports.ObjectType = exports.ObjectIntersectionType = exports.ArrayType = exports.AnyType = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.symbol.description.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Type {}
exports.Type = Type;
class PrimitiveType extends Type {
  constructor(name, validator) {
    super();
    this.name = name;
    this.validator = validator;
  }
  check(data) {
    return this.validator(data);
  }
  extends(type) {
    if (type === this) {
      return true;
    }
    if (type instanceof UnionType) {
      return type.types.some(t => this.extends(t));
    }
    return false;
  }
}
exports.PrimitiveType = PrimitiveType;
class UnionType extends Type {
  constructor(name, types) {
    super();
    this.name = name;
    this.types = types;
  }
  extends(type) {
    if (type === this) {
      return true;
    }

    // If the type extends any of the types in the union, then it extends the union
    return this.types.every(t => t.extends(type));
  }
  check(data) {
    return this.types.some(t => t.check(data));
  }
}
exports.UnionType = UnionType;
class ObjectType extends Type {
  constructor(name, properties) {
    super();
    this.name = name;
    this.properties = properties;
  }
  extend(name, properties) {
    return new ObjectType(name, _objectSpread(_objectSpread({}, this.properties), properties));
  }
  extends(type) {
    if (type === this) {
      return true;
    }
    if (type instanceof ObjectType) {
      return Object.keys(type.properties).every(key => {
        const property = this.properties[key];
        const otherProperty = type.properties[key];
        if (!property) {
          return false;
        }
        return property.extends(otherProperty);
      });
    }
    return false;
  }
  check(data) {
    if (typeof data !== 'object' || data === null) {
      return false;
    }
    return Object.keys(this.properties).every(key => {
      const property = this.properties[key];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = data[key];
      return property.check(value);
    });
  }
}
exports.ObjectType = ObjectType;
class ObjectIntersectionType extends ObjectType {
  constructor(name, types) {
    const properties = {};
    for (const type of types) {
      for (const key of Object.keys(type.properties)) {
        const property = type.properties[key];
        const existingProperty = properties[key];
        if (existingProperty) {
          if (!property.extends(existingProperty) && !existingProperty.extends(property)) {
            // If neither extends the other, then we have a problem
            throw new Error("Property ".concat(key, " is defined as both ").concat(existingProperty.name, " and ").concat(property.name, " and neither extends the other"));
          }
          properties[key] = existingProperty.extends(property) ? existingProperty : property;
        } else {
          properties[key] = property;
        }
      }
    }
    super(name, properties);
    this.name = name;
  }
}
exports.ObjectIntersectionType = ObjectIntersectionType;
class UnionIntersectionType extends UnionType {
  constructor(name, types) {
    const newTypes = [];
    for (const union of types) {
      for (const type of union.types) {
        if (types.every(u => u.types.some(t => type.extends(t)))) {
          if (!newTypes.includes(type)) {
            newTypes.push(type);
          }
        }
      }
    }
    super(name, newTypes);
    this.name = name;
  }
}
exports.UnionIntersectionType = UnionIntersectionType;
class ArrayType extends Type {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
  }
  check(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    return data.every(value => this.type.check(value));
  }
  extends(type) {
    if (type === this) {
      return true;
    }
    if (type instanceof ArrayType) {
      return this.type.extends(type.type);
    }
    return false;
  }
}
exports.ArrayType = ArrayType;
class AnyType extends Type {
  constructor() {
    super(...arguments);
    _defineProperty(this, "name", 'any');
  }
  check(data) {
    return true;
  }
  extends(type) {
    return true;
  }
}
exports.AnyType = AnyType;