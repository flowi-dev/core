import {
  ArrayType,
  FALSE,
  INTEGER,
  NULL,
  NUMBER,
  ObjectType,
  PrimitiveType,
  STRING,
  TRUE,
  UnionType,
} from '../src';
import { Serializable } from '../src/classes/Serializable';

describe('Saving a primitive as a string and loading it again', () => {
  it('should be the same', () => {
    const primitive = STRING;
    const serialized = primitive.serialize();
    const deserialized = PrimitiveType.deserialize(serialized);

    expect(deserialized).toBe(primitive);
  });

  it('should retain the same check function', () => {
    const tests: {
      primitive: PrimitiveType;
      valid: any[];
      invalid: any[];
    }[] = [
      {
        primitive: TRUE,
        valid: [true],
        invalid: [
          false,
          1,
          0,
          'true',
          'false',
          '1',
          '0',
          null,
          undefined,
          {},
          [],
        ],
      },
      {
        primitive: FALSE,
        valid: [false],
        invalid: [
          true,
          0,
          1,
          'true',
          'false',
          '1',
          '0',
          null,
          undefined,
          {},
          [],
        ],
      },
      {
        primitive: INTEGER,
        valid: [0, 1, -1, 100, -100, 1000000, -1000000],
        invalid: [
          true,
          false,
          'true',
          'false',
          '1',
          '0',
          null,
          undefined,
          {},
          [],
        ],
      },
      {
        primitive: STRING,
        valid: ['true', 'false', '1', '0'],
        invalid: [true, false, 1, 0, null, undefined, {}, []],
      },
      {
        primitive: NULL,
        valid: [null],
        invalid: [
          true,
          false,
          1,
          0,
          'true',
          'false',
          '1',
          '0',
          undefined,
          {},
          [],
        ],
      },
    ];

    for (const test of tests) {
      const serialized = test.primitive.serialize();
      const deserialized = Serializable.deserialize(
        serialized,
      ) as PrimitiveType;

      for (const valid of test.valid) {
        expect(deserialized.check(valid)).toBe(true);
      }

      for (const invalid of test.invalid) {
        expect(deserialized.check(invalid)).toBe(false);
      }
    }
  });
});

describe('Saving a union as a string and loading it again', () => {
  const UNION = NUMBER;

  const serialized = UNION.serialize();
  const deserialized = Serializable.deserialize(serialized) as UnionType;
  it('should be the same', () => {
    expect(deserialized).toBe(UNION);
  });

  it('should retain the same check function', () => {
    expect(deserialized.check(1)).toBe(true);
    expect(deserialized.check(3.1415)).toBe(true);
    expect(deserialized.check(0)).toBe(true);
    expect(deserialized.check(false)).toBe(false);
    expect(deserialized.check(true)).toBe(false);
    expect(deserialized.check('1')).toBe(false);
    expect(deserialized.check('3.1415')).toBe(false);
  });
});

describe('Serializing and deserializing object types', () => {
  const OBJECT = new ObjectType('object', {
    username: STRING,
    password: STRING,
    age: INTEGER,
  });

  const serialized = OBJECT.serialize();
  const deserialized = Serializable.deserialize(serialized) as ObjectType;

  it('should be the same', () => {
    expect(deserialized).toMatchObject(OBJECT);
  });
});

describe("Serializing and deserializing nested objects", () => {
  const OBJECT = new ObjectType('object', {
    username: STRING,
    password: STRING,
    age: INTEGER,
    address: new ObjectType('address', {
      street: STRING,
      city: STRING,
      coordinates: new ArrayType('coordinates', NUMBER),
    }),
  });

  const serialized = OBJECT.serialize();
  console.log(serialized);
  Serializable.remove(OBJECT.name); // Remove the object from the cache
  Serializable.remove('address'); // Remove the object from the cache
  Serializable.remove('coordinates'); // Remove the object from the cache
  const deserialized = Serializable.deserialize(serialized) as ObjectType;

  it('should be the same', () => {
    expect(deserialized).toMatchObject(OBJECT);
  });

  it('should retain the same check function', () => {
    expect(deserialized.check({})).toBe(false);
    expect(deserialized.check({ username: 'test' })).toBe(false);
    expect(deserialized.check({ username: 'test', password: 'test' })).toBe(
      false,
    );
    expect(
      deserialized.check({
        username: 'test',
        password: 'test',
        age: 20,
        address: {
          street: 'test',
          city: 'test',
          coordinates: [0, 0],
        },
      }),
    ).toBe(true);
  });
});

describe("Serializing and deserializing objects that aren't saved", () => {
  const OBJECT = new ObjectType('unsaved-object', {
    username: STRING,
    password: STRING,
    age: INTEGER,
  });

  Serializable.remove(OBJECT.name); // Remove the object from the cache

  const serialized = OBJECT.serialize();
  const deserialized = Serializable.deserialize(serialized) as ObjectType;

  it('should be the same', () => {
    expect(deserialized).toMatchObject(OBJECT);
  });
});

describe("Serializing and deserializing unions that aren't saved", () => {
  const UNION = new UnionType('unsaved-union', [STRING, INTEGER]);

  Serializable.remove(UNION.name); // Remove the union from the cache

  const serialized = UNION.serialize();
  const deserialized = Serializable.deserialize(serialized) as UnionType;

  it('should be the same', () => {
    expect(deserialized).toMatchObject(UNION);
  });
});

describe("Serializing and deserializing arrays that aren't saved", () => {
  const ARRAY = new ArrayType(
    'unsaved-array',
    new ObjectType('unsaved-object', {
      username: STRING,
      password: STRING,
    }),
  );

  Serializable.remove(ARRAY.name); // Remove the array from the cache
  Serializable.remove(ARRAY.elementType.name); // Remove the element type from the cache

	const serialized = ARRAY.serialize();
	const deserialized = Serializable.deserialize(serialized); // Should not throw an error
	
	it('should be the same', () => {
		expect(deserialized).toMatchObject(ARRAY);
	});

});

describe("Serializing and deserializing primitives that aren't saved should fail", () => {
  const UNSAVED = new PrimitiveType('unsaved', (data: any) => true);

  Serializable.remove(UNSAVED.name); // Remove the primitive from the cache;

  const serialized = UNSAVED.serialize();

  // The reason it fails is that the validation function is not saved, so it can't be loaded
  it('should throw an error', () => {
    expect(() => Serializable.deserialize(serialized)).toThrow();
  });
});
