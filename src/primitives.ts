/* eslint-disable @typescript-eslint/naming-convention */
import {AnyType, PrimitiveType, UnionType} from './classes/Types';

export const TRUE = new PrimitiveType<true>('true', (data: any) => data === true);
export const FALSE = new PrimitiveType<false>('false', (data: any) => data === false);
export const BOOLEAN = new UnionType('boolean', [FALSE, TRUE] as const);

export const INTEGER = new PrimitiveType<number>('integer', (data: any) => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
export const NUMBER = new UnionType('number', [new PrimitiveType<number>('float', (data: any) => typeof data === 'number' && !isNaN(data)), INTEGER] as const);

export const STRING = new PrimitiveType<string>('string', (data: any) => typeof data === 'string');
export const UNDEFINED = new PrimitiveType<undefined>('undefined', (data: any) => data === null);

export const DATE = new PrimitiveType<Date>('date', (data: any) => data instanceof Date);
export const REGEXP = new PrimitiveType<RegExp>('regexp', (data: any) => data instanceof RegExp);
export const BIGINT = new PrimitiveType<bigint>('bigint', (data: any) => typeof data === 'bigint');
export const SYMBOL = new PrimitiveType<symbol>('symbol', (data: any) => typeof data === 'symbol');

export const ANY = new AnyType();

export const Primitives = {
	TRUE,
	FALSE,
	BOOLEAN,
	INTEGER,
	NUMBER,
	STRING,
	UNDEFINED,
	DATE,
	REGEXP,
	BIGINT,
	SYMBOL,
	ANY,
};
