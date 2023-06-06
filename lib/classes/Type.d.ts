import { Serializable } from './Serializable';
export declare abstract class BaseType extends Serializable {
    abstract _: string;
    abstract name: string;
    abstract extends(type: BaseType): boolean;
    abstract check(data: any): boolean;
}
export declare class PrimitiveType extends BaseType {
    name: string;
    private readonly validator;
    _: string;
    constructor(name: string, validator: (data: any) => boolean);
    check(data: any): boolean;
    extends(type: BaseType): boolean;
}
export declare class UnionType extends BaseType {
    name: string;
    readonly types: BaseType[];
    _: string;
    constructor(name: string, types: BaseType[]);
    extends(type: BaseType): boolean;
    check(data: any): boolean;
}
export declare class ArrayType extends BaseType {
    name: string;
    readonly elementType: BaseType;
    _: string;
    constructor(name: string, elementType: BaseType);
    check(data: any): boolean;
    extends(type: BaseType): boolean;
    serialize(): {
        name: string;
        _: string;
        elementType: {
            name: string;
            _: string;
        };
    };
}
export declare class AnyType extends BaseType {
    _: string;
    name: string;
    constructor();
    check(data: any): boolean;
    extends(type: BaseType): boolean;
}
export declare class ObjectType extends BaseType {
    name: string;
    properties: Record<string, BaseType>;
    _: string;
    constructor(name: string, properties: Record<string, BaseType>);
    extend(name: string, properties: Record<string, BaseType>): ObjectType;
    extends(type: BaseType): boolean;
    check(data: any): boolean;
    serialize(): {
        name: string;
        _: string;
        properties: Record<string, {
            name: string;
            _: string;
        }>;
    };
}
export declare class ObjectIntersectionType extends ObjectType {
    name: string;
    constructor(name: string, types: ObjectType[]);
}
export declare class UnionIntersectionType extends UnionType {
    name: string;
    constructor(name: string, types: UnionType[]);
}
//# sourceMappingURL=Type.d.ts.map