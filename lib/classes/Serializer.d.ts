import { type Serializable } from './Serializable';
export type SerializerRegisterValue = new () => Serializable;
/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
export declare class Serializer {
    static readonly _register: Map<string, (...args: any[]) => Serializable>;
    static register<T extends Serializable>(type: new () => T, deserialize: (data: ReturnType<T['serialize']>) => T): void;
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
    static deserialize<T extends Serializable>(data: ReturnType<T['serialize']>): T;
}
//# sourceMappingURL=Serializer.d.ts.map