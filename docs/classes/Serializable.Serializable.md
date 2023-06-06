[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serializable](../modules/Serializable.md) / Serializable

# Class: Serializable

[Serializable](../modules/Serializable.md).Serializable

This class is used to serialize and deserialize types.
It stores a cache of all types that have been serialized and deserialized to easily retrieve them.

## Hierarchy

- **`Serializable`**

  ↳ [`BaseType`](Type.BaseType.md)

## Table of contents

### Constructors

- [constructor](Serializable.Serializable.md#constructor)

### Properties

- [cache](Serializable.Serializable.md#cache)

### Methods

- [serialize](Serializable.Serializable.md#serialize)
- [deserialize](Serializable.Serializable.md#deserialize)

## Constructors

### constructor

• **new Serializable**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[Serializable.ts:98](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Serializable.ts#L98)

## Properties

### cache

▪ `Static` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

The cache of all types that have been serialized and deserialized.

#### Defined in

[Serializable.ts:11](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Serializable.ts#L11)

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

#### Defined in

[Serializable.ts:65](https://github.com/flowi-dev/core/blob/1e17ede/src/classes/Serializable.ts#L65)
