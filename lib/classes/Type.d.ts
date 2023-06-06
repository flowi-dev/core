export declare abstract class Type {
    abstract name: string;
    abstract extends(type: Type): boolean;
    abstract check(data: any): boolean;
}
export declare class PrimitiveType extends Type {
    name: string;
    private readonly validator;
    constructor(name: string, validator: (data: any) => boolean);
    check(data: any): boolean;
    extends(type: Type): boolean;
}
export declare class UnionType extends Type {
    name: string;
    readonly types: Type[];
    constructor(name: string, types: Type[]);
    extends(type: Type): boolean;
    check(data: any): boolean;
}
export declare class ObjectType extends Type {
    name: string;
    readonly properties: Record<string, Type>;
    constructor(name: string, properties: Record<string, Type>);
    extend(name: string, properties: Record<string, Type>): ObjectType;
    extends(type: Type): boolean;
    check(data: any): boolean;
}
export declare class IntersectionType extends ObjectType {
    name: string;
    constructor(name: string, types: ObjectType[]);
}
export declare class ArrayType extends Type {
    name: string;
    private readonly type;
    constructor(name: string, type: Type);
    check(data: any): boolean;
    extends(type: Type): boolean;
}
//# sourceMappingURL=Type.d.ts.map