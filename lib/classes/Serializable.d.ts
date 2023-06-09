import { Serializer } from './Serializer';
export type SerializedData<T extends Record<string, any> = Record<string, unknown>> = {
    _: string;
} & T;
export type DeserializeFunction<T extends Record<string, any> = Record<string, unknown>> = (data: SerializedData<T>) => T;
/**
 * This class defines instances that can be serialized and deserialized.
*/
export declare class Serializable<T extends Record<string, any> = Record<string, unknown>> {
    static register<T extends Serializable>(deserialize: Parameters<typeof Serializer.register<T>>[1]): void;
    serialize(): SerializedData<T>;
}
//# sourceMappingURL=Serializable.d.ts.map