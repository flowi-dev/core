import { type Serializable } from './Serializable';
export type SerializerRegisterValue = new () => Serializable;
/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
export declare class Serializer {
    static readonly _register: Map<string, (...args: any[]) => Serializable>;
    static register<T extends Serializable>(type: new () => T, deserialize: (data: ReturnType<T['serialize']>) => T): void;
    static deserialize<T extends Serializable>(data: ReturnType<T['serialize']>): T;
}
//# sourceMappingURL=Serializer.d.ts.map