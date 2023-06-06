/**
 * This class is used to serialize and deserialize types.
 * It stores a cache of all types that have been serialized and deserialized to easily retrieve them.
 */
export declare class Serializable {
    /**
     * The cache of all types that have been serialized and deserialized.
     */
    static cache: Map<string, Serializable>;
    /**
     * Deserialize a type from a serialized object.
     *
     * ```json
     * # Serialized object
     * {
   * 	name: 'object',
   * 	_: 'ObjectType',
   * 	properties: {
   * 	  username: {
   * 	    name: 'string',
   * 	    _: 'PrimitiveType',
   * 	    validator: [Function (anonymous)]
   * 	  },
   * 	  password: {
   * 	    name: 'string',
   * 	    _: 'PrimitiveType',
   * 	    validator: [Function (anonymous)]
   * 	  },
   * 	  age: {
   * 	    name: 'integer',
   * 	    _: 'PrimitiveType',
   * 	    validator: [Function (anonymous)]
   * 	  },
   * 	  address: { name: 'address', _: 'ObjectType', properties: [Object] }
   * }
     *```
     *
     * ```ts
     * const deserialized = Serializable.deserialize({...});
     * console.log(deserialized);
     * // ObjectType {
     * //   name: 'object',
     * //   properties: {
     * //     username: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
     * //     password: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
     * //     age: PrimitiveType { name: 'integer', validator: [Function (anonymous)] },
     * //     address: ObjectType {
     * //       name: 'address',
     * //       properties: {
     * //         street: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
     * //         city: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
     * //         coordinates: ArrayType {
     * //           name: 'coordinates',
     * //           elementType: PrimitiveType { name: 'number', validator: [Function (anonymous)] }
     * //         }
     * //       }
     * //     }
     * //   }
     * // }
     * ```
     */
    static deserialize(data: {
        name: string;
        _: string;
    }): Serializable;
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