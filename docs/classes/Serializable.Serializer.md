[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serializable](../modules/Serializable.md) / Serializer

# Class: Serializer

[Serializable](../modules/Serializable.md).Serializer

This class is used to serialize and deserialize types.
It stores a cache of all types that have been serialized and deserialized to easily retrieve them.

## Table of contents

### Constructors

- [constructor](Serializable.Serializer.md#constructor)

### Properties

- [cache](Serializable.Serializer.md#cache)

### Methods

- [addToCache](Serializable.Serializer.md#addtocache)
- [deserialize](Serializable.Serializer.md#deserialize)
- [removeFromCache](Serializable.Serializer.md#removefromcache)

## Constructors

### constructor

• **new Serializer**()

## Properties

### cache

▪ `Static` `Protected` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

The cache of all types that have been serialized and deserialized.

#### Defined in

[Serializable.ts:115](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L115)

## Methods

### addToCache

▸ `Static` **addToCache**(`name`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`Serializable`](Serializable.Serializable.md) |

#### Returns

`void`

#### Defined in

[Serializable.ts:104](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L104)

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

#### Defined in

[Serializable.ts:71](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L71)

___

### removeFromCache

▸ `Static` **removeFromCache**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[Serializable.ts:108](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L108)
