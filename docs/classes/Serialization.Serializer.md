[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serialization](../modules/Serialization.md) / Serializer

# Class: Serializer

[Serialization](../modules/Serialization.md).Serializer

This class is used to serialize and deserialize types.
It stores a cache of all types that have been serialized and deserialized to easily retrieve them.

## Table of contents

### Constructors

- [constructor](Serialization.Serializer.md#constructor)

### Properties

- [cache](Serialization.Serializer.md#cache)

### Methods

- [addToCache](Serialization.Serializer.md#addtocache)
- [deserialize](Serialization.Serializer.md#deserialize)
- [getKey](Serialization.Serializer.md#getkey)
- [removeFromCache](Serialization.Serializer.md#removefromcache)

## Constructors

### constructor

• **new Serializer**()

## Properties

### cache

▪ `Static` `Protected` **cache**: `Map`<`string`, [`Serializable`](Serialization.Serializable.md)\>

The cache of all types that have been serialized and deserialized.

#### Defined in

[Serialization.ts:70](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L70)

## Methods

### addToCache

▸ `Static` **addToCache**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Serializable`](Serialization.Serializable.md) |

#### Returns

`void`

#### Defined in

[Serialization.ts:59](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L59)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serialization.Serializable.md)

Deserializes a type from a json object. If the type is already in the cache, it will be retrieved from there. Otherwise, it will attempt to be created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`SerializableData`](Serialization.SerializableData.md) |

#### Returns

[`Serializable`](Serialization.Serializable.md)

#### Defined in

[Serialization.ts:26](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L26)

___

### getKey

▸ `Static` `Private` **getKey**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`SerializableData`](Serialization.SerializableData.md) |

#### Returns

`string`

#### Defined in

[Serialization.ts:72](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L72)

___

### removeFromCache

▸ `Static` **removeFromCache**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Serializable`](Serialization.Serializable.md) |

#### Returns

`void`

#### Defined in

[Serialization.ts:63](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L63)
