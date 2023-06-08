import { SerializableData } from './Serializer';
/**
 * This class defines instances that can be serialized and deserialized.
 */
export declare class Serializable extends SerializableData {
    readonly name: string;
    /** @hidden */
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
//# sourceMappingURL=Serializable.d.ts.map