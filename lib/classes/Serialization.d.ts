/**
 * Defines the required data for serialization.
 */
export declare abstract class SerializableData {
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
/**
 * This class defines instances that can be serialized and deserialized.
 */
export declare class Serializable extends SerializableData {
    readonly name: string;
    _: string;
    constructor(name: string);
    /**
     * The fallback function for serialization. Most types will override this function.
     */
    serialize(): {
        name: string;
        _: string;
    };
}
//# sourceMappingURL=Serialization.d.ts.map