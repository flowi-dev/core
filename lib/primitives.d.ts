import { AnyType, PrimitiveType, UnionType } from './classes/Types';
export declare const TRUE: PrimitiveType<true>;
export declare const FALSE: PrimitiveType<false>;
export declare const BOOLEAN: UnionType<readonly [PrimitiveType<false>, PrimitiveType<true>]>;
export declare const INTEGER: PrimitiveType<number>;
export declare const NUMBER: UnionType<readonly [PrimitiveType<number>, PrimitiveType<number>]>;
export declare const STRING: PrimitiveType<string>;
export declare const UNDEFINED: PrimitiveType<undefined>;
export declare const DATE: PrimitiveType<Date>;
export declare const REGEXP: PrimitiveType<RegExp>;
export declare const BIGINT: PrimitiveType<bigint>;
export declare const SYMBOL: PrimitiveType<symbol>;
export declare const ANY: AnyType<any>;
//# sourceMappingURL=primitives.d.ts.map