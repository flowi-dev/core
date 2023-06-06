[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Pin](../modules/Pin.md) / Pin

# Class: Pin

[Pin](../modules/Pin.md).Pin

This class is used to serialize and deserialize types.
It stores a cache of all types that have been serialized and deserialized to easily retrieve them.

## Hierarchy

- [`Serializable`](Serializable.Serializable.md)

  ↳ **`Pin`**

## Table of contents

### Constructors

- [constructor](Pin.Pin.md#constructor)

### Properties

- [\_](Pin.Pin.md#_)
- [name](Pin.Pin.md#name)
- [type](Pin.Pin.md#type)
- [cache](Pin.Pin.md#cache)

### Methods

- [serialize](Pin.Pin.md#serialize)
- [deserialize](Pin.Pin.md#deserialize)
- [remove](Pin.Pin.md#remove)

## Constructors

### constructor

• **new Pin**(`name`, `type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Lowercase`<`string`\> |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Overrides

[Serializable](Serializable.Serializable.md).[constructor](Serializable.Serializable.md#constructor)

#### Defined in

[Pin.ts:10](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Pin.ts#L10)

## Properties

### \_

• **\_**: `string` = `Pin.name`

#### Defined in

[Pin.ts:6](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Pin.ts#L6)

___

### name

• `Readonly` **name**: `Lowercase`<`string`\>

#### Defined in

[Pin.ts:8](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Pin.ts#L8)

___

### type

• `Readonly` **type**: [`BaseType`](Type.BaseType.md)

#### Defined in

[Pin.ts:10](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Pin.ts#L10)

___

### cache

▪ `Static` `Protected` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[Serializable](Serializable.Serializable.md).[cache](Serializable.Serializable.md#cache)

#### Defined in

[Serializable.ts:97](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Serializable.ts#L97)

## Methods

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

[Serializable](Serializable.Serializable.md).[serialize](Serializable.Serializable.md#serialize)

#### Defined in

[Serializable.ts:106](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Serializable.ts#L106)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serializable.Serializable.md)

Deserialize a type from a serialized object.

```json
{
	"name": "object",
	"_": "ObjectType",
	"properties": {
	  "username": {
	    "name": "string",
	    "_": "PrimitiveType",
	  },
	  "password": {
	    "name": "string",
	    "_": "PrimitiveType",
	  },
	  "age": {
	    "name": "integer",
	    "_": "PrimitiveType",
	  },
	  "address": { ... }
 }
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

[Serializable](Serializable.Serializable.md).[deserialize](Serializable.Serializable.md#deserialize)

#### Defined in

[Serializable.ts:60](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Serializable.ts#L60)

___

### remove

▸ `Static` **remove**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[Serializable](Serializable.Serializable.md).[remove](Serializable.Serializable.md#remove)

#### Defined in

[Serializable.ts:93](https://github.com/flowi-dev/core/blob/0433a82/src/classes/Serializable.ts#L93)
