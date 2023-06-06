[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / PrimitiveType

# Class: PrimitiveType

[Type](../modules/Type.md).PrimitiveType

This class defines primitive types, such as string, number, boolean, etc.

```ts
const string = new PrimitiveType('string', (data: any) => typeof data === 'string');
string.check('hello'); // true
string.check(1); // false
```

You can create your own by defining a name and a validator function.
```ts
const myType = new PrimitiveType('myType', (data: any) => data === 'hello');
myType.check('hello'); // true
myType.check('world'); // false
```

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`PrimitiveType`**

## Table of contents

### Constructors

- [constructor](Type.PrimitiveType.md#constructor)

### Properties

- [\_](Type.PrimitiveType.md#_)
- [name](Type.PrimitiveType.md#name)
- [validator](Type.PrimitiveType.md#validator)
- [cache](Type.PrimitiveType.md#cache)

### Methods

- [check](Type.PrimitiveType.md#check)
- [extends](Type.PrimitiveType.md#extends)
- [serialize](Type.PrimitiveType.md#serialize)
- [deserialize](Type.PrimitiveType.md#deserialize)

## Constructors

### constructor

• **new PrimitiveType**(`name`, `validator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validator` | (`data`: `any`) => `boolean` |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:54](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Type.ts#L54)

## Properties

### \_

• **\_**: `string` = `PrimitiveType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:53](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Type.ts#L53)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:55](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Type.ts#L55)

___

### validator

• `Private` `Readonly` **validator**: (`data`: `any`) => `boolean`

#### Type declaration

▸ (`data`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`boolean`

#### Defined in

[Type.ts:56](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Type.ts#L56)

___

### cache

▪ `Static` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

The cache of all types that have been serialized and deserialized.

#### Inherited from

[BaseType](Type.BaseType.md).[cache](Type.BaseType.md#cache)

#### Defined in

[Serializable.ts:11](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Serializable.ts#L11)

## Methods

### check

▸ **check**(`data`): `boolean`

Checks if the given data is of this type.
```ts
STRING.check('hello'); // true
STRING.check(1); // false

BOOLEAN.check(true); // true
BOOLEAN.check(1); // false
BOOLEAN.check('hello'); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Overrides

[BaseType](Type.BaseType.md).[check](Type.BaseType.md#check)

#### Defined in

[Type.ts:61](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Type.ts#L61)

___

### extends

▸ **extends**(`type`): `boolean`

Checks if this type extends the given type.

```ts
// Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
TRUE.extends(BOOLEAN); // true
BOOLEAN.extends(TRUE); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

`boolean`

#### Overrides

[BaseType](Type.BaseType.md).[extends](Type.BaseType.md#extends)

#### Defined in

[Type.ts:65](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Type.ts#L65)

___

### serialize

▸ **serialize**(): `Object`

The fallback function for serialization. Most types will override this function.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `name` | `string` |

#### Inherited from

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

#### Defined in

[Serializable.ts:105](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Serializable.ts#L105)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serializable.Serializable.md)

Deserialize a type from a serialized object.

```json
# Serialized object
{
 * 	name: 'object',
 * 	_: 'ObjectType',
 * 	properties: {
 * 	  username: {
 * 	    name: 'string',
 * 	    _: 'PrimitiveType',
 * 	    validator: [Function (anonymous)]
 * 	  },
 * 	  password: {
 * 	    name: 'string',
 * 	    _: 'PrimitiveType',
 * 	    validator: [Function (anonymous)]
 * 	  },
 * 	  age: {
 * 	    name: 'integer',
 * 	    _: 'PrimitiveType',
 * 	    validator: [Function (anonymous)]
 * 	  },
 * 	  address: { name: 'address', _: 'ObjectType', properties: [Object] }
 * }
```

```ts
const deserialized = Serializable.deserialize({...});
console.log(deserialized);
// ObjectType {
//   name: 'object',
//   properties: {
//     username: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//     password: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//     age: PrimitiveType { name: 'integer', validator: [Function (anonymous)] },
//     address: ObjectType {
//       name: 'address',
//       properties: {
//         street: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//         city: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//         coordinates: ArrayType {
//           name: 'coordinates',
//           elementType: PrimitiveType { name: 'number', validator: [Function (anonymous)] }
//         }
//       }
//     }
//   }
// }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data._` | `string` |
| `data.name` | `string` |

#### Returns

[`Serializable`](Serializable.Serializable.md)

#### Inherited from

[BaseType](Type.BaseType.md).[deserialize](Type.BaseType.md#deserialize)

#### Defined in

[Serializable.ts:65](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Serializable.ts#L65)
