[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serializable](../modules/Serializable.md) / Serializable

# Class: Serializable

[Serializable](../modules/Serializable.md).Serializable

## Hierarchy

- **`Serializable`**

  ↳ [`BaseType`](Type.BaseType.md)

## Table of contents

### Constructors

- [constructor](Serializable.Serializable.md#constructor)

### Properties

- [catalog](Serializable.Serializable.md#catalog)

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

[Serializable.ts:39](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Serializable.ts#L39)

## Properties

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Defined in

[Serializable.ts:4](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Serializable.ts#L4)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `name` | `string` |

#### Defined in

[Serializable.ts:43](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Serializable.ts#L43)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serializable.Serializable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data._` | `string` |
| `data.name` | `string` |

#### Returns

[`Serializable`](Serializable.Serializable.md)

#### Defined in

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Serializable.ts#L6)
