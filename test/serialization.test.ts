
import { Primitives } from '../src/primitives'
import { PrimitiveType, UnionType, ObjectType, ArrayType } from '../src/classes/Types';
import { Serializer } from '../src/classes/Serialization/Serializer';

describe('Saving a primitive as a string and loading it again', () => {
  it('should be the same', () => {
    const primitive = Primitives.STRING;
    const serialized = primitive.serialize();
    const deserialized = Serializer.deserialize(serialized);

    expect(deserialized).toBe(primitive);
  });

  it('should retain the same check function', () => {
    const tests: {
      primitive: PrimitiveType;
      valid: any[];
      invalid: any[];
    }[] = [
      {
        primitive: Primitives.TRUE,
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
        primitive: Primitives.FALSE,
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
        primitive: Primitives.INTEGER,
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
        primitive: Primitives.STRING,
        valid: ['true', 'false', '1', '0'],
        invalid: [true, false, 1, 0, null, undefined, {}, []],
      },
      {
        primitive: Primitives.UNDEFINED,
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
      const deserialized = Serializer.deserialize(
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
  const UNION = Primitives.NUMBER;

  const serialized = UNION.serialize();
  const deserialized = Serializer.deserialize(serialized) as UnionType;
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
    username: Primitives.STRING,
    password: Primitives.STRING,
    age: Primitives.INTEGER,
  });

  const serialized = OBJECT.serialize();
  const deserialized = Serializer.deserialize(serialized) as ObjectType;

  it('should be the same', () => {
    expect(deserialized).toMatchObject(OBJECT);
  });
});

describe("Serializing and deserializing nested objects", () => {

  const COORDINATES = new ArrayType('coordinates', Primitives.NUMBER)

  const ADDRESS = new ObjectType('address', {
    street: Primitives.STRING,
    city: Primitives.STRING,
    coordinates: COORDINATES
  });
  

  const OBJECT = new ObjectType('object', {
    username: Primitives.STRING,
    password: Primitives.STRING,
    age: Primitives.INTEGER,
    address: ADDRESS
  });

  const serialized = OBJECT.serialize();
  Serializer.removeFromCache(OBJECT); // Remove the object from the cache
  Serializer.removeFromCache(ADDRESS); // Remove the object from the cache
  Serializer.removeFromCache(COORDINATES); // Remove the object from the cache

  const deserialized = Serializer.deserialize(serialized) as ObjectType;

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
    username: Primitives.STRING,
    password: Primitives.STRING,
    age: Primitives.INTEGER,
  });
  
  const serialized = OBJECT.serialize();
  const deserialized = Serializer.deserialize(serialized) as ObjectType;
  
    Serializer.removeFromCache(OBJECT); // Remove the object from the cache

  it('should be the same', () => {
    expect(deserialized).toMatchObject(OBJECT);
  });
});

describe("Serializing and deserializing unions that aren't saved", () => {
  const UNION = new UnionType('unsaved-union', [Primitives.STRING, Primitives.INTEGER]);

  const serialized = UNION.serialize();
  const deserialized = Serializer.deserialize(serialized) as UnionType;
  
  Serializer.removeFromCache(UNION); // Remove the union from the cache
  
  it('should be the same', () => {
    expect(deserialized).toMatchObject(UNION);
  });
});

describe("Serializing and deserializing arrays that aren't saved", () => {

  const ELEMENT_TYPE = new ObjectType('unsaved-object', {
    username: Primitives.STRING,
    password: Primitives.STRING,
  });

  const ARRAY = new ArrayType(
    'unsaved-array',
    ELEMENT_TYPE
  );

	const serialized = ARRAY.serialize();
	
  Serializer.removeFromCache(ARRAY); // Remove the array from the cache
  Serializer.removeFromCache(ELEMENT_TYPE); // Remove the element type from the cache
  
  const deserialized = Serializer.deserialize(serialized); // Should not throw an error
  
	it('should be the same', () => {
		expect(deserialized).toMatchObject(ARRAY);
	});

});

describe("Serializing and deserializing primitives that aren't saved should fail", () => {
  const UNSAVED = new PrimitiveType('unsaved', (data: any) => true);

  const serialized = UNSAVED.serialize();
  Serializer.removeFromCache(UNSAVED); // Remove the primitive from the cache;


  // The reason it fails is that the validation function is not saved, so it can't be loaded
  it('should throw an error', () => {
    expect(() => {
      console.log(Serializer.deserialize(serialized))
    }).toThrow();
  });
});

describe('Serializing and deserializing unions with objects', () => {
  const ObjA = new ObjectType('ObjA', {
    a: Primitives.STRING,
  });

  const ObjB = new ObjectType('ObjB', {
    b: Primitives.STRING,
  });

  const UNION = new UnionType('Union', [ObjA, ObjB]);

  const serialized = UNION.serialize();
  Serializer.removeFromCache(UNION); // Remove the union from the cache

  it('should be the same', () => {
    expect(Serializer.deserialize(serialized)).toMatchObject(UNION);
  });
});