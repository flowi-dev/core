"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnionType = exports.PrimitiveType = exports.ObjectType = exports.BaseType = exports.ArrayType = exports.AnyType = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.from-entries.js");
var _Serialization = require("./Serialization");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
 * This class is abstract and should not be used directly.
 */
class BaseType extends _Serialization.Serializable {}
exports.BaseType = BaseType;
/**
 * This class defines primitive types, such as string, number, boolean, etc.
 *
 * ```ts
 * const string = new PrimitiveType('string', (data: any) => typeof data === 'string');
 * string.check('hello'); // true
 * string.check(1); // false
 * ```
 *
 * You can create your own by defining a name and a validator function.
 * ```ts
 * const myType = new PrimitiveType('myType', (data: any) => data === 'hello');
 * myType.check('hello'); // true
 * myType.check('world'); // false
 * ```
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class PrimitiveType extends BaseType {
  constructor(name, validator) {
    super(name);
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
/**
 * This class defines unions, just like in TypeScript, a union is a type that can be one of the types in the union.
 * ```ts
 * const union = new UnionType('union', [STRING, NUMBER]);
 * union.check('hello'); // true
 * union.check(1); // true
 * union.check(true); // false
 * ```
*/
class UnionType extends BaseType {
  /**
   * Creates a union from the intersection of two unions.
   * ```ts
   * const a = new UnionType('a', [STRING, TRUE]);
   * const b = new UnionType('b', [STRING, FALSE]);
   *
   * const c = UnionType.fromIntersect('c', [a, b]);
   * c.check('hello'); // true
   * c.check(true); // false
   * c.check(false); // false
   *
   * console.log(c.types); // [STRING] because TRUE and FALSE do not extend each other
   * ```
   *
   * ```ts
   * const a = new UnionType('a', [STRING, BOOLEAN, NUMBER]);
   * const b = new UnionType('b', [TRUE, NULL]);
   *
   * const c = UnionType.fromIntersect('c', [a, b]);
   * c.check('hello'); // false
   * c.check(true); // true
   * c.check(null); // false
   * c.check(1); // false
   *
   * console.log(c.types); // [TRUE] because TRUE extends BOOLEAN
   * ```
   */
  static fromIntersect(name, unions) {
    // Only keep the types that are compatible with both unions
    const flattened = [...unions[0].types, ...unions[1].types].filter((t, i, a) => a.indexOf(t) === i);
    const newTypes = [];
    for (const t of flattened) {
      if (t.extends(unions[0]) && t.extends(unions[1])) {
        newTypes.push(t);
      }
    }
    return new UnionType(name, newTypes);
  }
  constructor(name, types) {
    super(name);
    this.name = name;
    this.types = types;
  }

  /**
   * Extends the union with a new type, this will return a new union with the new type added.
   * ```ts
   * const union = new UnionType('union', [STRING, NUMBER]);
   * const extended = union.extend(BOOLEAN);
   *
   * extended.check('hello'); // true
   * extended.check(1); // true
   * extended.check(true); // true
   * ```
   */
  extend(type) {
    return new UnionType(this.name, [...this.types, type]);
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
/**
 * This class defines arrays, an array is a type that contains a list of elements of a certain type.
 * ```ts
 * const array = new ArrayType('array', STRING);
 * array.check(['hello', 'world']); // true
 * array.check(['hello', 1]); // false
 * ```
 */
class ArrayType extends BaseType {
  constructor(name, elementType) {
    super(name);
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
exports.ArrayType = ArrayType;
/**
 * This type simply acts as the `any` type in typescript, it will always return true when checking data.
 * ```ts
 * const any = new AnyType();
 * any.check('hello'); // true
 * any.check(1); // true
 * any.check(true); // true
 * ```
 * This type is useful when you want to allow any type of data.
 * ```ts
 * const type = new ObjectType('type', {
 * 	name: STRING,
 * 	job: new AnyType(),
 * });
 * type.check({ name: 'John', job: 'Developer' }); // true
 * type.check({ name: 'John', job: 1 }); // true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class AnyType extends BaseType {
  constructor() {
    super('any');
    _defineProperty(this, "name", 'any');
  }
  check(data) {
    return true;
  }
  extends(data) {
    return true;
  }
}
exports.AnyType = AnyType;
/**
 * This type defines an object, an object is a type that contains a list of properties, each property has a name and a type.
 * ```ts
 * const UserObjType = new ObjectType('User', {
 * 	name: STRING,
 * 	age: NUMBER,
 * });
 *
 * UserObjType.check({ name: 'John', age: 1 }); // true
 * UserObjType.check({ name: 'John', age: '1' }); // false
 * ```
 *
 * Objects can also be nested.
 * ```ts
 * const UserObjType = new ObjectType('User', {
 * 	name: STRING,
 * 	age: NUMBER,
 * 	job: new ObjectType('Job', {
 * 		title: STRING,
 * 		salary: NUMBER,
 * 	}),
 * });
 * ```
 */
class ObjectType extends BaseType {
  /**
   * Create an object type from an intersection between two objects.
   * ```ts
   * const a = new ObjectType('a', {
   * 	name: STRING,
   * 	age: NUMBER,
   * });
   *
   * const b = new ObjectType('b', {
   * 	name: STRING,
   * 	job: STRING,
   * });
   *
   * const c = ObjectType.fromIntersect('c', [a, b]);
   * console.log(c.properties);
   * // {
   * // 	name: STRING,
   * // }
   * ```
   */
  static fromIntersect(name, objects) {
    const a = objects[0];
    const b = objects[1];
    const properties = {};
    for (const key of Object.keys(a.properties)) {
      if (!(key in b.properties)) {
        continue;
      }
      const aProperty = a.properties[key];
      const bProperty = b.properties[key];
      if ('fromIntersect' in aProperty.constructor && 'fromIntersect' in bProperty.constructor && aProperty.constructor.name === bProperty.constructor.name) {
        const intersection = aProperty.constructor;
        properties[key] = intersection.fromIntersect(key, [aProperty, bProperty]);
      } else if (aProperty.extends(bProperty) || bProperty.extends(aProperty)) {
        properties[key] = aProperty.extends(bProperty) ? aProperty : bProperty;
      } else {
        continue;
      }
    }
    return new ObjectType(name, properties);
  }
  constructor(name, properties) {
    super(name);
    this.name = name;
    this.properties = properties;
  }

  /**
   * Extend an object type with new properties.
   * ```ts
   * const UserObjType = new ObjectType('User', {
   * 	name: STRING,
   * 	age: NUMBER,
   * });
   *
   * const WorkingUserObjType = UserObjType.extend('WorkingUser', {
   * 	job: STRING,
   * });
   *
   * console.log(WorkingUserObjType.properties);
   * // {
   * // 	name: STRING,
   * // 	age: NUMBER,
   * // 	job: STRING,
   * // }
   * ```
   */
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