/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
export declare class Serializer {
    /**
     * Deserialize a type from a serialized object.
     *
     * ```json
    {
        "name": "object",
    "_": "ObjectType",
    "properties": {
            "username": {
                "name": "string",
        "_": "PrimitiveType",
      },
      "password": {
                "name": "string",
        "_": "PrimitiveType",
      },
      "age": {
                "name": "integer",
        "_": "PrimitiveType",
      },
      "address": { ... }
        }
        *```
        *
        * ```ts
        const deserialized = Serializable.deserialize({...});
        console.log(deserialized);
        // ObjectType {
            //   name: 'object',
            //   properties: {
                //     username: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
                //     password: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
                //     age: PrimitiveType { name: 'integer', validator: [Function (anonymous)] },
                //     address: ObjectType {
                    //       name: 'address',
                    //       properties: {
                        //         street: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
                        //         city: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
                        //         coordinates: ArrayType {
                            //           name: 'coordinates',
                            //           elementType: PrimitiveType { name: 'number', validator: [Function (anonymous)] }
                            //         }
                            //       }
                            //     }
     //   }
     // }
     * ```
     */
    static deserialize(data: {
        name: string;
        _: string;
    }): Serializable;
    static addToCache(name: string, type: Serializable): void;
    static removeFromCache(name: string): void;
    /**
             * The cache of all types that have been serialized and deserialized.
             */
    protected static cache: Map<string, Serializable>;
}
/**
 * This class defines instances that can be serialized and deserialized.
 */
export declare class Serializable {
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