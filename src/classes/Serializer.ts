import {type Serializable} from './Serializable';

export type SerializerRegisterValue = new () => Serializable;

/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Serializer {
	public static readonly _register = new Map<string, (...args: any[]) => Serializable>();
	public static register<T extends Serializable>(type: new () => T, deserialize: (data: ReturnType<T['serialize']>) => T) {
		this._register.set(type.name, deserialize);
	}

	/**
	 * Serializes an instance of a class.
	 *
	 * ```ts
	 *
	 * const mySerializable = new MySerializable('foo', 42);
	 * const serialized = mySerializable.serialize();
	 *
	 * console.log(serialized);
	 *
	 * // Output:
	 * // {
	 * // 	_: 'MySerializable',
	 * // 	foo: 'foo',
	 * // 	bar: 42,
	 * // }
	 *
	 * const deserialized = Serializer.deserialize(serialized);
	 *
	 * console.log(deserialized);
	 *
	 * // Output:
	 * // MySerializable {
	 * // 	foo: 'foo',
	 * // 	bar: 42,
	 * // }
	 *
	 * ```
	 */
	public static deserialize<T extends Serializable>(data: ReturnType<T['serialize']>): T {
		const deserialize = this._register.get(data._);
		if (!deserialize) {
			throw new Error(`No deserializer found for type '${data._}'`);
		}

		return deserialize(data) as T;
	}
}
