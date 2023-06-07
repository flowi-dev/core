import {ObjectType, UnionType, ArrayType, type BaseType} from './Types';

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
	 * Deserializes a type from a json object. If the type is already in the cache, it will be retrieved from there. Otherwise, it will attempt to be created.
	 */
	public static deserialize(data: SerializableData): Serializable {
		const saved = Serializer.cache.get(this.getKey(data));

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

	public static addToCache(instance: Serializable): void {
		Serializer.cache.set(Serializer.getKey({name: instance.name, _: instance._}), instance);
	}

	public static removeFromCache(instance: Serializable): void {
		Serializer.cache.delete(Serializer.getKey({name: instance.name, _: instance._}));
	}

	/**
	 * The cache of all types that have been serialized and deserialized.
	*/
	protected static cache = new Map<string, Serializable>();

	private static getKey(data: SerializableData): string {
		return `${data._}:${data.name}`;
	}
}

/**
 * This class defines instances that can be serialized and deserialized.
 */
export class Serializable extends SerializableData {
	_: string;

	constructor(public readonly name: string) {
		super();
		Serializer.addToCache(this);
		this._ = this.constructor.name;
	}

	/**
	 * The fallback function for serialization. Most types will override this function.
	 */
	public serialize(): {
		name: string;
		_: string;
	} {
		// Update the cache
		Serializer.removeFromCache(this);
		Serializer.addToCache(this);

		// Only keep the properties, not the methods and convert it to a basic object instead of a class
		return {
			name: this.constructor.name,
			_: this.constructor.name,
			...Object.fromEntries(Object.entries(this).filter(([key]) => !key.startsWith('_')).map(([key, value]) => [key, value])),
		};
	}
}
