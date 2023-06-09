/* eslint-disable @typescript-eslint/naming-convention */
import {AnyType, PrimitiveType, UnionType} from './classes/Types';

class PrimitiveTrue extends PrimitiveType<true> {
	constructor() {
		super('true', (data: any) => data === true);
	}
}
PrimitiveTrue.register(() => new PrimitiveTrue());
const TRUE = new PrimitiveTrue();

class PrimitiveFalse extends PrimitiveType<false> {
	constructor() {
		super('false', (data: any) => data === false);
	}
}
PrimitiveFalse.register(() => new PrimitiveFalse());
const FALSE = new PrimitiveFalse();

const BOOLEAN = new UnionType('boolean', [FALSE, TRUE] as const);

class PrimitiveInteger extends PrimitiveType<number> {
	constructor() {
		super('integer', (data: any) => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
	}
}
PrimitiveInteger.register(() => new PrimitiveInteger());
const INTEGER = new PrimitiveInteger();

class PrimitiveFloat extends PrimitiveType<number> {
	constructor() {
		super('float', (data: any) => typeof data === 'number' && !isNaN(data));
	}
}
PrimitiveFloat.register(() => new PrimitiveFloat());
const FLOAT = new PrimitiveFloat();

const NUMBER = new UnionType('number', [FLOAT, INTEGER] as const);

class PrimitiveString extends PrimitiveType<string> {
	constructor() {
		super('string', (data: any) => typeof data === 'string');
	}
}
PrimitiveString.register(() => new PrimitiveString());
const STRING = new PrimitiveString();

class PrimitiveUndefined extends PrimitiveType<undefined> {
	constructor() {
		super('undefined', (data: any) => data === undefined);
	}
}
PrimitiveUndefined.register(() => new PrimitiveUndefined());
const UNDEFINED = new PrimitiveUndefined();

class PrimitiveDate extends PrimitiveType<Date> {
	constructor() {
		super('date', (data: any) => data instanceof Date);
	}
}
PrimitiveDate.register(() => new PrimitiveDate());
const DATE = new PrimitiveDate();

class PrimitiveRegExp extends PrimitiveType<RegExp> {
	constructor() {
		super('regexp', (data: any) => data instanceof RegExp);
	}
}
PrimitiveRegExp.register(() => new PrimitiveRegExp());
const REGEXP = new PrimitiveRegExp();

class PrimitiveBigInt extends PrimitiveType<bigint> {
	constructor() {
		super('bigint', (data: any) => typeof data === 'bigint');
	}
}
PrimitiveBigInt.register(() => new PrimitiveBigInt());
const BIGINT = new PrimitiveBigInt();

class PrimitiveSymbol extends PrimitiveType<symbol> {
	constructor() {
		super('symbol', (data: any) => typeof data === 'symbol');
	}
}
PrimitiveSymbol.register(() => new PrimitiveSymbol());
const SYMBOL = new PrimitiveSymbol();

const ANY = new AnyType();

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Primitives {
	static readonly TRUE = TRUE;
	static readonly FALSE = FALSE;
	static readonly BOOLEAN = BOOLEAN;
	static readonly INTEGER = INTEGER;
	static readonly NUMBER = NUMBER;
	static readonly STRING = STRING;
	static readonly UNDEFINED = UNDEFINED;
	static readonly DATE = DATE;
	static readonly REGEXP = REGEXP;
	static readonly BIGINT = BIGINT;
	static readonly SYMBOL = SYMBOL;
	static readonly ANY = ANY;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() { }
}
