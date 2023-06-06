"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnionType = exports.PrimitiveType = exports.ObjectType = exports.BaseType = exports.ArrayType = exports.AnyType = void 0;
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _Serializable = require("./Serializable");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
 * This class is abstract and should not be used directly.
 */
class BaseType extends _Serializable.Serializable {}

/**
 * This class defines primitive types, such as string, number, boolean, etc.
 */
exports.BaseType = BaseType;
class PrimitiveType extends BaseType {
  constructor(name, validator) {
    super(name);
    _defineProperty(this, "_", PrimitiveType.name);
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

/**
 * This class defines unions, just like in TypeScript, a union is a type that can be one of the types in the union.
 * @example
 * ```ts
 * const union = new UnionType('union', [STRING, NUMBER]);
 * union.check('hello'); // true
 * union.check(1); // true
 * union.check(true); // false
 * ```
 *
 * You can also create an intersection of two unions, this will create a new union that contains all the types that are in both unions.
 * @example
 * ```ts
 * const a = new UnionType('union1', [STRING, NUMBER]);
 * const b = new UnionType('union2', [NUMBER, BOOLEAN]);
 * const intersection = UnionType.fromIntersection('intersection', [a, b]);
 * console.log(intersection.types); // [NUMBER]
 * ```
 */
exports.PrimitiveType = PrimitiveType;
class UnionType extends BaseType {
  constructor(name, types) {
    super(name);
    _defineProperty(this, "_", UnionType.name);
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

/**
 * This class defines arrays, an array is a type that contains a list of elements of a certain type.
 * @example
 * ```ts
 * const array = new ArrayType('array', STRING);
 * array.check(['hello', 'world']); // true
 * array.check(['hello', 1]); // false
 * ```
 */
exports.UnionType = UnionType;
class ArrayType extends BaseType {
  constructor(name, elementType) {
    super(name);
    _defineProperty(this, "_", ArrayType.name);
    this.name = name;
    this.elementType = elementType;
  }
  check(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    return data.every(value => this.elementType.check(value));
  }
  extends(type) {
    if (type === this) {
      return true;
    }
    if (type instanceof ArrayType) {
      return this.elementType.extends(type.elementType);
    }
    return false;
  }
  serialize() {
    return _objectSpread(_objectSpread({}, super.serialize()), {}, {
      elementType: this.elementType.serialize()
    });
  }
}

/**
 * This type simply acts as the `any` type in typescript, it will always return true when checking data.
 * @example
 * ```ts
 * const any = new AnyType();
 * any.check('hello'); // true
 * any.check(1); // true
 * any.check(true); // true
 * ```
 * This type is useful when you want to allow any type of data.
 * @example
 * ```ts
 * const type = new ObjectType('type', {
 *  name: STRING,
 *  job: new AnyType(),
 * });
 * type.check({ name: 'John', job: 'Developer' }); // true
 * type.check({ name: 'John', job: 1 }); // true
 * ```
 */
exports.ArrayType = ArrayType;
class AnyType extends BaseType {
  constructor() {
    super('any');
    _defineProperty(this, "_", AnyType.name);
    _defineProperty(this, "name", 'any');
  }
  check(data) {
    return true;
  }
  extends(type) {
    return true;
  }
}

/**
 * This type defines an object, an object is a type that contains a list of properties, each property has a name and a type.
 * @example
 * ```ts
 * const UserObjType = new ObjectType('User', {
 * name: STRING,
 * age: NUMBER,
 * });
 *
 * UserObjType.check({ name: 'John', age: 1 }); // true
 * UserObjType.check({ name: 'John', age: '1' }); // false
 * ```
 *
 * Objects can also be nested.
 * @example
 * ```ts
 * const UserObjType = new ObjectType('User', {
 * name: STRING,
 * age: NUMBER,
 * job: new ObjectType('Job', {
 * title: STRING,
 * salary: NUMBER,
 * }),
 * });
 * ```
 *
 * You can also create an intersection of two objects
 * @example
 * ```ts
 * const a = new ObjectType('a', {
 * name: STRING,
 * age: NUMBER,
 * });
 *
 * const b = new ObjectType('b', {
 * name: STRING,
 * job: STRING,
 * });
 *
 * const intersection = ObjectType.fromIntersection('intersection', [a, b]);
 * console.log(intersection.properties); // { name: STRING }
 * ```
 */
exports.AnyType = AnyType;
class ObjectType extends BaseType {
  constructor(name, properties) {
    super(name);
    _defineProperty(this, "_", ObjectType.name);
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
  serialize() {
    return _objectSpread(_objectSpread({}, super.serialize()), {}, {
      properties: Object.fromEntries(Object.entries(this.properties).map(_ref => {
        let [key, value] = _ref;
        return [key, value.serialize()];
      }))
    });
  }
}
exports.ObjectType = ObjectType;