import {Serializer, SerializableData} from './Serializer';

/**
 * This class defines instances that can be serialized and deserialized.
 */
export class Serializable extends SerializableData {
	/** @hidden */
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
