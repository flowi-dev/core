import {ObjectType, UnionType, ArrayType, type BaseType} from './Type';

/**
 * Defines the required data for serialization.
 */
export abstract class SerializableData {
	/**
	 * The class name
	 */
	abstract _: string;
	/**
	 * The identifier for the specific instance of the class
	 */
	abstract name: string;
}

/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Serializer {
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
		const saved = Serializer.cache.get(data.name);

		if (!saved) {
			switch (data._) {
				case 'ObjectType':
					// eslint-disable-next-line no-case-declarations
					const properties: Record<string, BaseType> = {};
					for (const [key, value] of Object.entries((data as unknown as {properties: Record<string, {name: string; _: string}>}).properties)) {
						properties[key] = Serializer.deserialize(value) as BaseType;
					}

					return new ObjectType(data.name, properties);
				case 'UnionType':
					// eslint-disable-next-line no-case-declarations
					const types: BaseType[] = [];
					for (const value of (data as unknown as {types: Array<{name: string; _: string}>}).types) {
						types.push(Serializer.deserialize(value) as BaseType);
					}

					return new UnionType(data.name, types);
				case 'ArrayType':
					// eslint-disable-next-line no-case-declarations
					const elementType = Serializer.deserialize((data as ReturnType<ArrayType['serialize']>).elementType) as BaseType;
					return new ArrayType(data.name, elementType);
				default:
					throw new Error(`Unknown type ${data._}:${data.name}`);
			}
		}

		return saved;
	}

	public static addToCache(name: string, type: Serializable): void {
		Serializer.cache.set(name, type);
	}

	public static removeFromCache(name: string): void {
		Serializer.cache.delete(name);
	}

	/**
			 * The cache of all types that have been serialized and deserialized.
			 */
	protected static cache = new Map<string, Serializable>();
}

/**
 * This class defines instances that can be serialized and deserialized.
 */
export class Serializable extends SerializableData {
	_: string;

	constructor(public name: string) {
		super();
		Serializer.addToCache(name, this);
		this._ = this.constructor.name;
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
