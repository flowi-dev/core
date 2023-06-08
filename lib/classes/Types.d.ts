import { Serializable } from './Serializable';
export type TypeToLiteral<T extends BaseType> = T extends PrimitiveType ? PrimitiveTypeToLiteral<T> : T extends AnyType ? any : T extends ArrayType ? ArrayTypeToLiteral<T> : T extends ObjectType ? ObjectTypeToLiteral<T> : T extends UnionType ? UnionTypeToLiteral<T> : never;
/**
 * The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
 * This class is abstract and should not be used directly.
 */
export declare abstract class BaseType extends Serializable {
    /**
     * Checks if this type extends the given type.
     *
     * ```ts
     * // Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
     * TRUE.extends(BOOLEAN); // true
     * BOOLEAN.extends(TRUE); // false
     * ```
     */
    abstract extends(type: BaseType): boolean;
    /**
     * Checks if the given data is of this type.
     * ```ts
     * STRING.check('hello'); // true
     * STRING.check(1); // false
     *
     * BOOLEAN.check(true); // true
     * BOOLEAN.check(1); // false
     * BOOLEAN.check('hello'); // false
     * ```
     */
    abstract check(data: any): boolean;
}
export type PrimitiveTypeToLiteral<T extends PrimitiveType> = T extends PrimitiveType<infer U> ? U : never;
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
export declare class PrimitiveType<_ = any> extends BaseType {
    name: string;
    private readonly validator;
    constructor(name: string, validator: (data: any) => boolean);
    check(data: any): boolean;
    extends(type: BaseType): boolean;
}
export type UnionTypeToLiteral<T extends UnionType> = T extends UnionType<infer U> ? {
    [K in keyof U]: TypeToLiteral<U[K]>;
}[number] : never;
/**
 * This class defines unions, just like in TypeScript, a union is a type that can be one of the types in the union.
 * ```ts
 * const union = new UnionType('union', [STRING, NUMBER]);
 * union.check('hello'); // true
 * union.check(1); // true
 * union.check(true); // false
 * ```
*/
export declare class UnionType<T extends readonly BaseType[] = readonly BaseType[]> extends BaseType {
    name: string;
    readonly types: T;
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
    static fromIntersect<A extends UnionType, B extends UnionType>(name: string, unions: [A, B]): UnionType<BaseType[]>;
    constructor(name: string, types: T);
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
    extend(type: BaseType): UnionType;
    extends(type: BaseType): boolean;
    check(data: any): boolean;
}
export type ArrayTypeToLiteral<T extends ArrayType> = T extends ArrayType<infer U> ? U : never;
/**
 * This class defines arrays, an array is a type that contains a list of elements of a certain type.
 * ```ts
 * const array = new ArrayType('array', STRING);
 * array.check(['hello', 'world']); // true
 * array.check(['hello', 1]); // false
 * ```
 */
export declare class ArrayType<T extends BaseType[] = BaseType[]> extends BaseType {
    name: string;
    readonly elementType: T[number];
    constructor(name: string, elementType: T[number]);
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
export type AnyTypeToLiteral = any;
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
export declare class AnyType<_ = any> extends BaseType {
    name: string;
    constructor();
    check(data: any): boolean;
    extends(data: BaseType): boolean;
}
export type ObjectTypeToLiteral<T extends ObjectType> = T extends ObjectType<infer U> ? {
    [K in keyof U]: TypeToLiteral<U[K]>;
} : never;
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
export declare class ObjectType<T extends Record<string, BaseType> = Record<string, BaseType>> extends BaseType {
    name: string;
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
    static fromIntersect(name: string, objects: [ObjectType, ObjectType]): ObjectType<Record<string, BaseType>>;
    properties: T;
    constructor(name: string, properties: T);
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
//# sourceMappingURL=Types.d.ts.map