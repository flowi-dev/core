/* eslint-disable @typescript-eslint/naming-convention */
import {AnyType, PrimitiveType, UnionType} from './classes/Types';

const TRUE = new PrimitiveType<true>('true', (data: any) => data === true);
const FALSE = new PrimitiveType<false>('false', (data: any) => data === false);
const BOOLEAN = new UnionType('boolean', [FALSE, TRUE] as const);
const INTEGER = new PrimitiveType<number>('integer', (data: any) => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
const NUMBER = new UnionType('number', [new PrimitiveType<number>('float', (data: any) => typeof data === 'number' && !isNaN(data)), INTEGER] as const);
const STRING = new PrimitiveType<string>('string', (data: any) => typeof data === 'string');
const UNDEFINED = new PrimitiveType<undefined>('undefined', (data: any) => data === null);
const DATE = new PrimitiveType<Date>('date', (data: any) => data instanceof Date);
const REGEXP = new PrimitiveType<RegExp>('regexp', (data: any) => data instanceof RegExp);
const BIGINT = new PrimitiveType<bigint>('bigint', (data: any) => typeof data === 'bigint');
const SYMBOL = new PrimitiveType<symbol>('symbol', (data: any) => typeof data === 'symbol');
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
