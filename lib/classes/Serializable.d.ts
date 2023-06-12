import { Serializer } from './Serializer';
export type SerializedData<T extends Record<string, any> = Record<string, unknown>> = {
    _: string;
} & T;
export type DeserializeFunction<T extends Record<string, any> = Record<string, unknown>> = (data: SerializedData<T>) => T;
/**
 * This class defines instances that can be serialized and deserialized.
 *
 * ```ts
 * // The generic type defines what data is serialized.
 * class MySerializable extends Serializable<{
 * 	foo: string;
 * 	bar: number;
 * }> {
 * 	public constructor(
 * 		public readonly foo: string,
 * 		public readonly bar: number,
 * 	) {
 * 		super();
 * 	}
 *
 * 	// This method is called when the instance is serialized.
 * 	override serialize() {
 * 		return {
 * 			...super.serialize(),
 * 			foo: this.foo,
 * 			bar: this.bar,
 * 		};
 * 	}
 * }
 *
 * // This method is called when the instance is deserialized and returns an instance of the class.
 * MySerializable.register((data) => new MySerializable(data.foo, data.bar));
*/
export declare class Serializable<T extends Record<string, any> = Record<string, unknown>> {
    static register<T extends Serializable>(deserialize: Parameters<typeof Serializer.register<T>>[1]): void;
    serialize(): SerializedData<T>;
}
//# sourceMappingURL=Serializable.d.ts.map