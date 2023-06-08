/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
import { type SerializableData } from '.';
import { type Serializable } from './Serializable';
export declare class Serializer {
    /**
     * Deserializes a type from a json object. If the type is already in the cache, it will be retrieved from there. Otherwise, it will attempt to be created.
     */
    static deserialize(data: SerializableData): Serializable;
    static addToCache(instance: Serializable): void;
    static removeFromCache(instance: Serializable): void;
    /**
     * The cache of all types that have been serialized and deserialized.
    */
    protected static cache: Map<string, Serializable>;
    private static getKey;
}
//# sourceMappingURL=Serializer.d.ts.map