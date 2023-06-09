import { Attribute, DataAttribute } from "../src/classes/Attribute";
import { Block } from "../src/classes/Block";
import { Serializer } from "../src/classes/Serializer";
import { ArrayType, ObjectType } from "../src/classes/Types";
import { Primitives } from "../src/primitives";


it("Should add new classes to the register", () => {
  expect(Serializer._register.has('PrimitiveTrue')).toBe(true);
})

it('should throw when deserializing an unknown class', () => {
  expect(() => Serializer.deserialize({
    _: "abc",
  })).toThrow();
});

it("Should be able to serialize and deserialize a block", () => {
  const testBlock = new Block('test-block');

  testBlock.addAttribute(new DataAttribute('test-attribute', {
    direction: 'input',
    datatype: Primitives.NUMBER
  }));

  testBlock.addAttribute(new DataAttribute('test-attribute-2', {
    direction: 'input',
    datatype: new ArrayType('string[]', Primitives.STRING)
  }));

  const UserType = new ObjectType('User', {
    name: Primitives.STRING,
    age: Primitives.NUMBER,
  })

  testBlock.addAttribute(new DataAttribute('test-attribute-3', {
    direction: 'input',
    datatype: UserType
  }));

  const serialized = testBlock.serialize();

  console.log(JSON.stringify(serialized, null, 2));

  const deserialized = Serializer.deserialize(serialized) as Block;
  expect(deserialized).toBeInstanceOf(Block);
  expect(deserialized.attributes).toHaveProperty('test-attribute');

});