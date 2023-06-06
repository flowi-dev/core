/* eslint-disable @typescript-eslint/naming-convention */
import {AnyType, PrimitiveType, UnionType} from './classes/Type';

export const TRUE = new PrimitiveType('true', (data: any) => data === true);
export const FALSE = new PrimitiveType('false', (data: any) => data === false);
export const BOOLEAN = new UnionType('boolean', [TRUE, FALSE]);

export const INTEGER = new PrimitiveType('integer', (data: any) => typeof data === 'number' && !isNaN(data) && data % 1 === 0);
export const NUMBER = new UnionType('number', [new PrimitiveType('float', (data: any) => typeof data === 'number' && !isNaN(data)), INTEGER]);

export const STRING = new PrimitiveType('string', (data: any) => typeof data === 'string');
export const NULL = new PrimitiveType('null', (data: any) => data === null);

export const ANY = new AnyType();
