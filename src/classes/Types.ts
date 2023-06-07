import {Serializable} from './Serialization';

/**
 * The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
 * This class is abstract and should not be used directly.
 */
export abstract class BaseType extends Serializable {
	/**
	 * Checks if this type extends the given type.
	 *
	 * ```ts
	 * // Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
	 * TRUE.extends(BOOLEAN); // true
	 * BOOLEAN.extends(TRUE); // false
	 * ```
	 */
	public abstract extends(type: BaseType): boolean;

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
	public abstract check(data: any): boolean;
}

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
export class PrimitiveType extends BaseType {
	constructor(
		public name: string,
		private readonly validator: (data: any) => boolean,
	) {
		super(name);
	}

	public check(data: any): boolean {
		return this.validator(data);
	}

	public extends(type: BaseType): boolean {
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
 * ```ts
 * const union = new UnionType('union', [STRING, NUMBER]);
 * union.check('hello'); // true
 * union.check(1); // true
 * union.check(true); // false
 * ```
*/
export class UnionType extends BaseType {
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
	static fromIntersect(name: string, unions: [UnionType, UnionType]) {
		// Only keep the types that are compatible with both unions
		const flattened = [...unions[0].types, ...unions[1].types]
			.filter((t, i, a) => a.indexOf(t) === i);
		const newTypes: BaseType[] = [];
		for (const t of flattened) {
			if (t.extends(unions[0]) && t.extends(unions[1])) {
				newTypes.push(t);
			}
		}

		return new UnionType(name, newTypes);
	}

	constructor(
		public name: string,
		readonly types: BaseType[],
	) {
		super(name);
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
	public extend(type: BaseType): UnionType {
		return new UnionType(this.name, [...this.types, type]);
	}

	public extends(type: BaseType): boolean {
		if (type === this) {
			return true;
		}

		// If the type extends any of the types in the union, then it extends the union
		return this.types.every(t => t.extends(type));
	}

	public check(data: any): boolean {
		return this.types.some(t => t.check(data));
	}
}

/**
 * This class defines arrays, an array is a type that contains a list of elements of a certain type.
 * ```ts
 * const array = new ArrayType('array', STRING);
 * array.check(['hello', 'world']); // true
 * array.check(['hello', 1]); // false
 * ```
 */
export class ArrayType extends BaseType {
	constructor(
		public name: string,
		readonly elementType: BaseType,
	) {
		super(name);
	}

	public check(data: any): boolean {
		if (!Array.isArray(data)) {
			return false;
		}

		return data.every(value => this.elementType.check(value));
	}

	public extends(type: BaseType): boolean {
		if (type === this) {
			return true;
		}

		if (type instanceof ArrayType) {
			return this.elementType.extends(type.elementType);
		}

		return false;
	}

	override serialize(): {
		name: string;
		_: string;
		elementType: {
			name: string;
			_: string;
		};
	} {
		return {
			...super.serialize(),
			elementType: this.elementType.serialize(),
		};
	}
}

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
export class AnyType extends BaseType {
	public name = 'any';

	constructor() {
		super('any');
	}

	public check(data: any): boolean {
		return true;
	}

	public extends(type: BaseType): boolean {
		return true;
	}
}

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
export class ObjectType extends BaseType {
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
	public static fromIntersect(name: string, objects: [ObjectType, ObjectType]) {
		const a = objects[0];
		const b = objects[1];

		const properties: Record<string, BaseType> = {};

		for (const key of Object.keys(a.properties)) {
			if (!(key in b.properties)) {
				continue;
			}

			const aProperty = a.properties[key];
			const bProperty = b.properties[key];

			if ('fromIntersect' in aProperty.constructor && 'fromIntersect' in bProperty.constructor && aProperty.constructor.name === bProperty.constructor.name) {
				const intersection = aProperty.constructor as unknown as {fromIntersect: (name: string, objects: [BaseType, BaseType]) => BaseType};
				properties[key] = intersection.fromIntersect(key, [aProperty, bProperty]);
			} else if (aProperty.extends(bProperty) || bProperty.extends(aProperty)) {
				properties[key] = aProperty.extends(bProperty) ? aProperty : bProperty;
			} else {
				continue;
			}
		}

		return new ObjectType(name, properties);
	}

	properties: Record<string, BaseType>;

	constructor(
		public name: string,
		properties: Record<string, BaseType>,
	) {
		super(name);
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
	public extend(name: string, properties: Record<string, BaseType>): ObjectType {
		return new ObjectType(name, {
			...this.properties,
			...properties,
		});
	}

	public extends(type: BaseType): boolean {
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

	public check(data: any): boolean {
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

	override serialize(): {
		name: string;
		_: string;
		properties: Record<string, {
			name: string;
			_: string;
		}>;
	} {
		return {
			...super.serialize(),
			properties: Object.fromEntries(Object.entries(this.properties).map(([key, value]) => [key, value.serialize()])),
		};
	}
}