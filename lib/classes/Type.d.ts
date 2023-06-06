import { Serializable } from './Serializable';
/**
 * The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
 * This class is abstract and should not be used directly.
 */
export declare abstract class BaseType extends Serializable {
    abstract _: string;
    abstract name: string;
    abstract extends(type: BaseType): boolean;
    abstract check(data: any): boolean;
}
/**
 * This class defines primitive types, such as string, number, boolean, etc.
 */
export declare class PrimitiveType extends BaseType {
    name: string;
    private readonly validator;
    _: string;
    constructor(name: string, validator: (data: any) => boolean);
    check(data: any): boolean;
    extends(type: BaseType): boolean;
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
 */
export declare class UnionType extends BaseType {
    name: string;
    readonly types: BaseType[];
    _: string;
    constructor(name: string, types: BaseType[]);
    extends(type: BaseType): boolean;
    check(data: any): boolean;
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
export declare class ArrayType extends BaseType {
    name: string;
    readonly elementType: BaseType;
    _: string;
    constructor(name: string, elementType: BaseType);
    check(data: any): boolean;
    extends(type: BaseType): boolean;
    serialize(): {
        name: string;
        _: string;
        elementType: {
            name: string;
            _: string;
        };
    };
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
 * 	name: STRING,
 *  job: new AnyType(),
 * });
 * type.check({ name: 'John', job: 'Developer' }); // true
 * type.check({ name: 'John', job: 1 }); // true
 * ```
 */
export declare class AnyType extends BaseType {
    _: string;
    name: string;
    constructor();
    check(data: any): boolean;
    extends(type: BaseType): boolean;
}
/**
 * This type defines an object, an object is a type that contains a list of properties, each property has a name and a type.
 * @example
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
 * @example
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
export declare class ObjectType extends BaseType {
    name: string;
    properties: Record<string, BaseType>;
    _: string;
    constructor(name: string, properties: Record<string, BaseType>);
    extend(name: string, properties: Record<string, BaseType>): ObjectType;
    extends(type: BaseType): boolean;
    check(data: any): boolean;
    serialize(): {
        name: string;
        _: string;
        properties: Record<string, {
            name: string;
            _: string;
        }>;
    };
}
//# sourceMappingURL=Type.d.ts.map