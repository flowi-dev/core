import { expect, test } from '@jest/globals';
import { Primitives } from '../src/primitives';
import { UnionType, ObjectType, ArrayType } from '../src/classes/Types';

it('TRUE extends TRUE, BOOLEAN', () => {
  expect(Primitives.TRUE.extends(Primitives.TRUE)).toBe(true);
  expect(Primitives.TRUE.extends(Primitives.FALSE)).toBe(false);
  expect(Primitives.TRUE.extends(Primitives.BOOLEAN)).toBe(true);
  expect(Primitives.TRUE.extends(Primitives.INTEGER)).toBe(false);
  expect(Primitives.TRUE.extends(Primitives.NUMBER)).toBe(false);
  expect(Primitives.TRUE.extends(Primitives.STRING)).toBe(false);
  expect(Primitives.TRUE.extends(Primitives.UNDEFINED)).toBe(false);
});

it('FALSE extends FALSE, BOOLEAN', () => {
  expect(Primitives.FALSE.extends(Primitives.TRUE)).toBe(false);
  expect(Primitives.FALSE.extends(Primitives.FALSE)).toBe(true);
  expect(Primitives.FALSE.extends(Primitives.BOOLEAN)).toBe(true);
  expect(Primitives.FALSE.extends(Primitives.INTEGER)).toBe(false);
  expect(Primitives.FALSE.extends(Primitives.NUMBER)).toBe(false);
  expect(Primitives.FALSE.extends(Primitives.STRING)).toBe(false);
  expect(Primitives.FALSE.extends(Primitives.UNDEFINED)).toBe(false);
});

it('BOOLEAN extends BOOLEAN', () => {
  expect(Primitives.BOOLEAN.extends(Primitives.TRUE)).toBe(false);
  expect(Primitives.BOOLEAN.extends(Primitives.FALSE)).toBe(false);
  expect(Primitives.BOOLEAN.extends(Primitives.BOOLEAN)).toBe(true);
  expect(Primitives.BOOLEAN.extends(Primitives.INTEGER)).toBe(false);
  expect(Primitives.BOOLEAN.extends(Primitives.NUMBER)).toBe(false);
  expect(Primitives.BOOLEAN.extends(Primitives.STRING)).toBe(false);
  expect(Primitives.BOOLEAN.extends(Primitives.UNDEFINED)).toBe(false);
});

it('INTEGER extends INTEGER, NUMBER', () => {
  expect(Primitives.INTEGER.extends(Primitives.TRUE)).toBe(false);
  expect(Primitives.INTEGER.extends(Primitives.FALSE)).toBe(false);
  expect(Primitives.INTEGER.extends(Primitives.BOOLEAN)).toBe(false);
  expect(Primitives.INTEGER.extends(Primitives.INTEGER)).toBe(true);
  expect(Primitives.INTEGER.extends(Primitives.NUMBER)).toBe(true);
  expect(Primitives.INTEGER.extends(Primitives.STRING)).toBe(false);
  expect(Primitives.INTEGER.extends(Primitives.UNDEFINED)).toBe(false);
});

it('NUMBER extends NUMBER', () => {
  expect(Primitives.NUMBER.extends(Primitives.TRUE)).toBe(false);
  expect(Primitives.NUMBER.extends(Primitives.FALSE)).toBe(false);
  expect(Primitives.NUMBER.extends(Primitives.BOOLEAN)).toBe(false);
  expect(Primitives.NUMBER.extends(Primitives.INTEGER)).toBe(false);
  expect(Primitives.NUMBER.extends(Primitives.NUMBER)).toBe(true);
  expect(Primitives.NUMBER.extends(Primitives.STRING)).toBe(false);
  expect(Primitives.NUMBER.extends(Primitives.UNDEFINED)).toBe(false);
});

it('STRING extends STRING', () => {
  expect(Primitives.STRING.extends(Primitives.TRUE)).toBe(false);
  expect(Primitives.STRING.extends(Primitives.FALSE)).toBe(false);
  expect(Primitives.STRING.extends(Primitives.BOOLEAN)).toBe(false);
  expect(Primitives.STRING.extends(Primitives.INTEGER)).toBe(false);
  expect(Primitives.STRING.extends(Primitives.NUMBER)).toBe(false);
  expect(Primitives.STRING.extends(Primitives.STRING)).toBe(true);
  expect(Primitives.STRING.extends(Primitives.UNDEFINED)).toBe(false);
});

it('UNDEFINED extends UNDEFINED', () => {
  expect(Primitives.UNDEFINED.extends(Primitives.TRUE)).toBe(false);
  expect(Primitives.UNDEFINED.extends(Primitives.FALSE)).toBe(false);
  expect(Primitives.UNDEFINED.extends(Primitives.BOOLEAN)).toBe(false);
  expect(Primitives.UNDEFINED.extends(Primitives.INTEGER)).toBe(false);
  expect(Primitives.UNDEFINED.extends(Primitives.NUMBER)).toBe(false);
  expect(Primitives.UNDEFINED.extends(Primitives.STRING)).toBe(false);
  expect(Primitives.UNDEFINED.extends(Primitives.UNDEFINED)).toBe(true);
});

it('TRUE can be checked', () => {
  expect(Primitives.TRUE.check(true)).toBe(true);
  expect(Primitives.TRUE.check(false)).toBe(false);
  expect(Primitives.TRUE.check(1)).toBe(false);
  expect(Primitives.TRUE.check(0.5)).toBe(false);
  expect(Primitives.TRUE.check('true')).toBe(false);
  expect(Primitives.TRUE.check(undefined)).toBe(false);
  expect(Primitives.TRUE.check([])).toBe(false);
  expect(Primitives.TRUE.check({})).toBe(false);
});

it('FALSE can be checked', () => {
  expect(Primitives.FALSE.check(true)).toBe(false);
  expect(Primitives.FALSE.check(false)).toBe(true);
  expect(Primitives.FALSE.check(1)).toBe(false);
  expect(Primitives.FALSE.check(0.5)).toBe(false);
  expect(Primitives.FALSE.check('true')).toBe(false);
  expect(Primitives.FALSE.check(undefined)).toBe(false);
  expect(Primitives.FALSE.check([])).toBe(false);
  expect(Primitives.FALSE.check({})).toBe(false);
});

it('BOOLEAN can be checked', () => {
  expect(Primitives.BOOLEAN.check(true)).toBe(true);
  expect(Primitives.BOOLEAN.check(false)).toBe(true);
  expect(Primitives.BOOLEAN.check(1)).toBe(false);
  expect(Primitives.BOOLEAN.check(0.5)).toBe(false);
  expect(Primitives.BOOLEAN.check('true')).toBe(false);
  expect(Primitives.BOOLEAN.check(undefined)).toBe(false);
  expect(Primitives.BOOLEAN.check([])).toBe(false);
  expect(Primitives.BOOLEAN.check({})).toBe(false);
});

it('INTEGER can be checked', () => {
  expect(Primitives.INTEGER.check(true)).toBe(false);
  expect(Primitives.INTEGER.check(false)).toBe(false);
  expect(Primitives.INTEGER.check(1)).toBe(true);
  expect(Primitives.INTEGER.check(0.5)).toBe(false);
  expect(Primitives.INTEGER.check('true')).toBe(false);
  expect(Primitives.INTEGER.check(undefined)).toBe(false);
  expect(Primitives.INTEGER.check([])).toBe(false);
  expect(Primitives.INTEGER.check({})).toBe(false);
});

it('NUMBER can be checked', () => {
  expect(Primitives.NUMBER.check(true)).toBe(false);
  expect(Primitives.NUMBER.check(false)).toBe(false);
  expect(Primitives.NUMBER.check(1)).toBe(true);
  expect(Primitives.NUMBER.check(0.5)).toBe(true);
  expect(Primitives.NUMBER.check('true')).toBe(false);
  expect(Primitives.NUMBER.check(undefined)).toBe(false);
  expect(Primitives.NUMBER.check([])).toBe(false);
  expect(Primitives.NUMBER.check({})).toBe(false);
});

it('STRING can be checked', () => {
  expect(Primitives.STRING.check(true)).toBe(false);
  expect(Primitives.STRING.check(false)).toBe(false);
  expect(Primitives.STRING.check(1)).toBe(false);
  expect(Primitives.STRING.check(0.5)).toBe(false);
  expect(Primitives.STRING.check('true')).toBe(true);
  expect(Primitives.STRING.check(undefined)).toBe(false);
  expect(Primitives.STRING.check([])).toBe(false);
  expect(Primitives.STRING.check({})).toBe(false);
});

it('UNDEFINED can be checked', () => {
  expect(Primitives.UNDEFINED.check(true)).toBe(false);
  expect(Primitives.UNDEFINED.check(false)).toBe(false);
  expect(Primitives.UNDEFINED.check(1)).toBe(false);
  expect(Primitives.UNDEFINED.check(0.5)).toBe(false);
  expect(Primitives.UNDEFINED.check('true')).toBe(false);
  expect(Primitives.UNDEFINED.check(undefined)).toBe(true);
  expect(Primitives.UNDEFINED.check([])).toBe(false);
  expect(Primitives.UNDEFINED.check({})).toBe(false);
});

it('ANY can be checked', () => {
  expect(Primitives.ANY.check(true)).toBe(true);
  expect(Primitives.ANY.check(false)).toBe(true);
  expect(Primitives.ANY.check(1)).toBe(true);
  expect(Primitives.ANY.check(0.5)).toBe(true);
  expect(Primitives.ANY.check('true')).toBe(true);
  expect(Primitives.ANY.check(undefined)).toBe(true);
  expect(Primitives.ANY.check([])).toBe(true);
  expect(Primitives.ANY.check({})).toBe(true);
});

it('DATE can be checked', () => {
  expect(Primitives.DATE.check(true)).toBe(false);
  expect(Primitives.DATE.check(false)).toBe(false);
  expect(Primitives.DATE.check(1)).toBe(false);
  expect(Primitives.DATE.check(0.5)).toBe(false);
  expect(Primitives.DATE.check('true')).toBe(false);
  expect(Primitives.DATE.check(undefined)).toBe(false);
  expect(Primitives.DATE.check([])).toBe(false);
  expect(Primitives.DATE.check({})).toBe(false);
  expect(Primitives.DATE.check(new Date())).toBe(true);
});

it('BIGINT can be checked', () => {
  expect(Primitives.BIGINT.check(true)).toBe(false);
  expect(Primitives.BIGINT.check(false)).toBe(false);
  expect(Primitives.BIGINT.check(1)).toBe(false);
  expect(Primitives.BIGINT.check(0.5)).toBe(false);
  expect(Primitives.BIGINT.check('true')).toBe(false);
  expect(Primitives.BIGINT.check(undefined)).toBe(false);
  expect(Primitives.BIGINT.check([])).toBe(false);
  expect(Primitives.BIGINT.check({})).toBe(false);
  expect(Primitives.BIGINT.check(new Date())).toBe(false);
  expect(Primitives.BIGINT.check(BigInt(2123))).toBe(true);
});

it('SYMBOL can be checked', () => {
  expect(Primitives.SYMBOL.check(true)).toBe(false);
  expect(Primitives.SYMBOL.check(false)).toBe(false);
  expect(Primitives.SYMBOL.check(1)).toBe(false);
  expect(Primitives.SYMBOL.check(0.5)).toBe(false);
  expect(Primitives.SYMBOL.check('true')).toBe(false);
  expect(Primitives.SYMBOL.check(undefined)).toBe(false);
  expect(Primitives.SYMBOL.check([])).toBe(false);
  expect(Primitives.SYMBOL.check({})).toBe(false);
  expect(Primitives.SYMBOL.check(new Date())).toBe(false);
  expect(Primitives.SYMBOL.check(BigInt(2123))).toBe(false);
  expect(Primitives.SYMBOL.check(Symbol())).toBe(true);
});

it('Check union types extend correctly', () => {
  const UNION = new UnionType('union', [Primitives.STRING, Primitives.NUMBER]);

  expect(UNION.extends(Primitives.STRING)).toBe(false);
  expect(UNION.extends(Primitives.NUMBER)).toBe(false);
  expect(UNION.extends(UNION)).toBe(true);
  expect(
    UNION.extends(
      new UnionType('union', [Primitives.STRING, Primitives.NUMBER]),
    ),
  ).toBe(true);
  expect(
    UNION.extends(
      new UnionType('union', [
        Primitives.STRING,
        Primitives.NUMBER,
        Primitives.BOOLEAN,
      ]),
    ),
  ).toBe(true);
  expect(
    UNION.extends(
      new UnionType('union', [Primitives.STRING, Primitives.BOOLEAN]),
    ),
  ).toBe(false);
  expect(
    UNION.extends(
      new UnionType('union', [Primitives.NUMBER, Primitives.BOOLEAN]),
    ),
  ).toBe(false);

  expect(Primitives.STRING.extends(UNION)).toBe(true);
  expect(Primitives.NUMBER.extends(UNION)).toBe(true);
});

it('Check that objects can be checked correctly', () => {
  const UserObj = new ObjectType('User', {
    name: Primitives.STRING,
    age: Primitives.INTEGER,
    verified: Primitives.BOOLEAN,
    created: Primitives.NUMBER,
  });

  expect(
    UserObj.check({
      name: 'John Doe',
      age: 21,
      verified: true,
      created: 1.5,
    }),
  ).toBe(true);

  expect(
    UserObj.check({
      name: 'John Doe',
      age: 21,
      verified: true,
      created: 1.5,
      other: 'other',
    }),
  ).toBe(true);

  expect(
    UserObj.check({
      name: 'John Doe',
      age: 21,
      verified: true,
    }),
  ).toBe(false);

  expect(
    UserObj.check({
      name: 21,
      age: 'John Doe',
      verified: true,
      created: 1.5,
    }),
  ).toBe(false);

  expect(UserObj.check(undefined)).toBe(false);
  expect(UserObj.check([])).toBe(false);
  expect(UserObj.check({})).toBe(false);
  expect(UserObj.check(1)).toBe(false);
  expect(UserObj.check(0.5)).toBe(false);
});

it('Check that objects can be extended correctly', () => {
  const UserObj = new ObjectType('User', {
    name: Primitives.STRING,
    age: Primitives.INTEGER,
    verified: Primitives.BOOLEAN,
    created: Primitives.NUMBER,
  });

  const AdminObj = UserObj.extend('Admin', {
    admin: Primitives.TRUE,
  });

  expect(
    AdminObj.check({
      name: 'John Doe',
      age: 21,
      verified: true,
      created: 1.5,
      admin: true,
    }),
  ).toBe(true);

  expect(
    AdminObj.check({
      name: 'John Doe',
      age: 21,
      verified: true,
      created: 1.5,
      admin: false,
    }),
  ).toBe(false);

  expect(
    AdminObj.check({
      admin: true,
    }),
  ).toBe(false);

  expect(
    AdminObj.check({
      name: 'John Doe',
      age: 21,
      verified: true,
      created: 1.5,
    }),
  ).toBe(false);

  expect(AdminObj.extends(UserObj)).toBe(true);
  expect(UserObj.extends(AdminObj)).toBe(false);
  expect(AdminObj.extends(AdminObj)).toBe(true);
  expect(UserObj.extends(UserObj)).toBe(true);
  expect(AdminObj.extends(Primitives.STRING)).toBe(false);
  expect(AdminObj.extends(Primitives.UNDEFINED)).toBe(false);
});

it('Test array types', () => {
  const NUM_ARRAY = new ArrayType('number[]', Primitives.NUMBER);
  expect(NUM_ARRAY.check([1, 2, 3])).toBe(true);
  expect(NUM_ARRAY.check([1, 2, '3'])).toBe(false);
  expect(NUM_ARRAY.check([1, 2, 3, '4'])).toBe(false);
  expect(NUM_ARRAY.check([1, 2, 3, undefined])).toBe(false);
  expect(NUM_ARRAY.check([1, 2, 3, undefined])).toBe(false);
  expect(NUM_ARRAY.check([1, 2, 3, true])).toBe(false);
  expect(NUM_ARRAY.check('Hello world!')).toBe(false);
  expect(NUM_ARRAY.check(1)).toBe(false);

  const STR_ARRAY = new ArrayType('string[]', Primitives.STRING);
  expect(STR_ARRAY.check(['1', '2', '3'])).toBe(true);
  expect(STR_ARRAY.check(['1', '2', 3])).toBe(false);
  expect(STR_ARRAY.check(['1', '2', '3', 4])).toBe(false);
  expect(STR_ARRAY.check(['1', '2', '3', undefined])).toBe(false);
  expect(STR_ARRAY.check(['1', '2', '3', undefined])).toBe(false);

  const UNION_ARRAY = new ArrayType(
    '(string|number)[]',
    new UnionType('string|number', [Primitives.STRING, Primitives.NUMBER]),
  );
  expect(UNION_ARRAY.check(['1', '2', '3'])).toBe(true);
  expect(UNION_ARRAY.check(['1', '2', 3])).toBe(true);
  expect(UNION_ARRAY.check(['1', '2', 3, 4])).toBe(true);
  expect(UNION_ARRAY.check(['1', '2', 3, undefined])).toBe(false);
  expect(UNION_ARRAY.check(['1', '2', 3, undefined])).toBe(false);

  expect(STR_ARRAY.extends(NUM_ARRAY)).toBe(false);
  expect(NUM_ARRAY.extends(STR_ARRAY)).toBe(false);
  expect(STR_ARRAY.extends(STR_ARRAY)).toBe(true);
  expect(NUM_ARRAY.extends(NUM_ARRAY)).toBe(true);
  expect(STR_ARRAY.extends(Primitives.STRING)).toBe(false);
  expect(STR_ARRAY.extends(Primitives.UNDEFINED)).toBe(false);
  expect(UNION_ARRAY.extends(STR_ARRAY)).toBe(false);
});

it("Test the 'any' type", () => {
  expect(Primitives.ANY.check('Hello world!')).toBe(true);
  expect(Primitives.ANY.check(1)).toBe(true);
  expect(Primitives.ANY.check(1.5)).toBe(true);
  expect(Primitives.ANY.check(true)).toBe(true);
  expect(Primitives.ANY.check(undefined)).toBe(true);
  expect(Primitives.ANY.check(undefined)).toBe(true);
  expect(Primitives.ANY.check([])).toBe(true);
  expect(Primitives.ANY.check({})).toBe(true);
  expect(Primitives.ANY.check(new Date())).toBe(true);
  expect(Primitives.ANY.check(() => {})).toBe(true);
  expect(Primitives.ANY.check(Symbol('Hello world!'))).toBe(true);

  expect(Primitives.ANY.extends(Primitives.ANY)).toBe(true);
  expect(Primitives.ANY.extends(Primitives.STRING)).toBe(true);
  expect(Primitives.ANY.extends(Primitives.NUMBER)).toBe(true);
  expect(Primitives.ANY.extends(Primitives.BOOLEAN)).toBe(true);

  expect(Primitives.STRING.extends(Primitives.ANY)).toBe(false);
  expect(Primitives.NUMBER.extends(Primitives.ANY)).toBe(false);
  expect(Primitives.BOOLEAN.extends(Primitives.ANY)).toBe(false);
});

it('Union intersections', () => {
  const A = new UnionType('A', [Primitives.STRING, Primitives.NUMBER]);
  const B = new UnionType('B', [Primitives.NUMBER, Primitives.BOOLEAN]);
  const C = new UnionType('C', [Primitives.STRING, Primitives.TRUE]);

  expect(UnionType.fromIntersect('A&B', [A, B]).types).toEqual([
    Primitives.NUMBER,
  ]);
  expect(UnionType.fromIntersect('A&C', [A, C]).types).toEqual([
    Primitives.STRING,
  ]);
  expect(UnionType.fromIntersect('B&C', [B, C]).types).toEqual([
    Primitives.TRUE,
  ]);
  expect(
    UnionType.fromIntersect('A&B&C', [
      A,
      UnionType.fromIntersect('B&C', [B, C]),
    ]).types,
  ).toEqual([]);
});

it('Union extension', () => {
  const A = new UnionType('A', [Primitives.STRING, Primitives.NUMBER]);
  const B = A.extend(Primitives.BOOLEAN);

  expect(B.types).toEqual([
    Primitives.STRING,
    Primitives.NUMBER,
    Primitives.BOOLEAN,
  ]);
  expect(B.extend(Primitives.UNDEFINED).types).toEqual([
    Primitives.STRING,
    Primitives.NUMBER,
    Primitives.BOOLEAN,
    Primitives.UNDEFINED,
  ]);
});

it('Object intersections', () => {
  expect(
    ObjectType.fromIntersect('A&B', [
      new ObjectType('A', {
        a: Primitives.STRING,
      }),
      new ObjectType('B', {
        a: Primitives.STRING,
        b: Primitives.TRUE,
      }),
    ]).properties,
  ).toMatchObject({
    a: Primitives.STRING,
  });

  expect(
    ObjectType.fromIntersect('A&B', [
      new ObjectType('A', {
        a: Primitives.STRING,
        b: Primitives.TRUE,
      }),
      new ObjectType('B', {
        a: Primitives.STRING,
      }),
    ]).properties,
  ).toMatchObject({
    a: Primitives.STRING,
  });

  expect(
    ObjectType.fromIntersect('A&B', [
      new ObjectType('A', {
        a: Primitives.BOOLEAN,
      }),
      new ObjectType('B', {
        a: Primitives.TRUE,
      }),
    ]).properties,
  ).toMatchObject({
    a: Primitives.TRUE,
  });

  expect(
    ObjectType.fromIntersect('A&B', [
      new ObjectType('A', {
        a: Primitives.BOOLEAN,
      }),
      new ObjectType('B', {
        a: Primitives.STRING,
      }),
    ]).properties,
  ).toMatchObject({});

  expect(
    ObjectType.fromIntersect('A&B', [
      new ObjectType('A', {
        name: Primitives.STRING,
        job: new ObjectType('Job', {
          title: Primitives.STRING,
          salary: Primitives.NUMBER,
        }),
      }),
      new ObjectType('B', {
        name: Primitives.STRING,
        job: new ObjectType('Job', {
          title: Primitives.STRING,
        }),
      }),
    ]).properties,
  ).toMatchObject({
    name: Primitives.STRING,
    job: new ObjectType('job', {
      title: Primitives.STRING,
    }),
  });

  expect(
    ObjectType.fromIntersect('A&B', [
      new ObjectType('A', {
        name: Primitives.STRING,
        job: new ObjectType('Job', {
          started: Primitives.INTEGER,
          salary: Primitives.NUMBER,
        }),
      }),
      new ObjectType('B', {
        name: Primitives.STRING,
        job: new ObjectType('Job', {
          title: Primitives.STRING,
        }),
      }),
    ]).properties,
  ).toMatchObject({
    name: Primitives.STRING,
  });
});
