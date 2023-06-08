import { AnyType, PrimitiveType, UnionType } from '../classes/Types';
export declare class Primitives {
    static readonly TRUE: PrimitiveType<true>;
    static readonly FALSE: PrimitiveType<false>;
    static readonly BOOLEAN: UnionType<readonly [PrimitiveType<false>, PrimitiveType<true>]>;
    static readonly INTEGER: PrimitiveType<number>;
    static readonly NUMBER: UnionType<readonly [PrimitiveType<number>, PrimitiveType<number>]>;
    static readonly STRING: PrimitiveType<string>;
    static readonly UNDEFINED: PrimitiveType<undefined>;
    static readonly DATE: PrimitiveType<Date>;
    static readonly REGEXP: PrimitiveType<RegExp>;
    static readonly BIGINT: PrimitiveType<bigint>;
    static readonly SYMBOL: PrimitiveType<symbol>;
    static readonly ANY: AnyType<any>;
    private constructor();
}
//# sourceMappingURL=index.d.ts.map