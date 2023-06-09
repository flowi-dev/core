import {Serializer} from './Serializer';

export type SerializedData<T extends Record<string, any> = Record<string, unknown>> = {
	_: string;
} & T;
export type DeserializeFunction<T extends Record<string, any> = Record<string, unknown>> = (data: SerializedData<T>) => T;

/**
 * This class defines instances that can be serialized and deserialized.
*/
export class Serializable<T extends Record<string, any> = Record<string, unknown>> {
	public static register<T extends Serializable>(deserialize: Parameters<typeof Serializer.register<T>>[1]) {
		Serializer.register(this as unknown as new () => T, deserialize);
	}

	public serialize(): SerializedData<T> {
		return {
			_: this.constructor.name,
		} as unknown as SerializedData<T>;
	}
}
