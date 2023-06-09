import { AnyType, PrimitiveType, UnionType } from './classes/Types';
declare class PrimitiveTrue extends PrimitiveType<true> {
    constructor();
}
declare class PrimitiveFalse extends PrimitiveType<false> {
    constructor();
}
declare class PrimitiveInteger extends PrimitiveType<number> {
    constructor();
}
declare class PrimitiveFloat extends PrimitiveType<number> {
    constructor();
}
declare class PrimitiveString extends PrimitiveType<string> {
    constructor();
}
declare class PrimitiveUndefined extends PrimitiveType<undefined> {
    constructor();
}
declare class PrimitiveDate extends PrimitiveType<Date> {
    constructor();
}
declare class PrimitiveRegExp extends PrimitiveType<RegExp> {
    constructor();
}
declare class PrimitiveBigInt extends PrimitiveType<bigint> {
    constructor();
}
declare class PrimitiveSymbol extends PrimitiveType<symbol> {
    constructor();
}
export declare class Primitives {
    static readonly TRUE: PrimitiveTrue;
    static readonly FALSE: PrimitiveFalse;
    static readonly BOOLEAN: UnionType<readonly [PrimitiveFalse, PrimitiveTrue]>;
    static readonly INTEGER: PrimitiveInteger;
    static readonly NUMBER: UnionType<readonly [PrimitiveFloat, PrimitiveInteger]>;
    static readonly STRING: PrimitiveString;
    static readonly UNDEFINED: PrimitiveUndefined;
    static readonly DATE: PrimitiveDate;
    static readonly REGEXP: PrimitiveRegExp;
    static readonly BIGINT: PrimitiveBigInt;
    static readonly SYMBOL: PrimitiveSymbol;
    static readonly ANY: AnyType<any>;
    private constructor();
}
export {};
//# sourceMappingURL=primitives.d.ts.map