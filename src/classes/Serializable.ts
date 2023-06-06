import {ObjectType, UnionType, ArrayType, type BaseType} from './Type';

/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
export class Serializable {
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

	public static deserialize(data: {name: string; _: string}): Serializable {
		const saved = Serializable.cache.get(data.name);

		if (!saved) {
			switch (data._) {
				case 'ObjectType':
					// eslint-disable-next-line no-case-declarations
					const properties: Record<string, BaseType> = {};
					for (const [key, value] of Object.entries((data as unknown as {properties: Record<string, {name: string; _: string}>}).properties)) {
						properties[key] = Serializable.deserialize(value) as BaseType;
					}

					return new ObjectType(data.name, properties);
				case 'UnionType':
					// eslint-disable-next-line no-case-declarations
					const types: BaseType[] = [];
					for (const value of (data as unknown as {types: Array<{name: string; _: string}>}).types) {
						types.push(Serializable.deserialize(value) as BaseType);
					}

					return new UnionType(data.name, types);
				case 'ArrayType':
					// eslint-disable-next-line no-case-declarations
					const elementType = Serializable.deserialize((data as ReturnType<ArrayType['serialize']>).elementType) as BaseType;
					return new ArrayType(data.name, elementType);
				default:
					throw new Error(`Unknown type ${data._}:${data.name}`);
			}
		}

		return saved;
	}

	public static remove(name: string): void {
		Serializable.cache.delete(name);
	}

	protected static cache = new Map<string, Serializable>();

	constructor(name: string) {
		Serializable.cache.set(name, this);
	}

	/**
	 * The fallback function for serialization. Most types will override this function.
	 */
	public serialize(): {
		name: string;
		_: string;
	} {
		// Only keep the properties, not the methods and convert it to a basic object instead of a class
		return {
			name: this.constructor.name,
			_: this.constructor.name,
			...Object.fromEntries(Object.entries(this).filter(([key]) => !key.startsWith('_')).map(([key, value]) => [key, value])),
		};
	}
}
