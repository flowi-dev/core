[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serializable](../modules/Serializable.md) / Serializable

# Class: Serializable

[Serializable](../modules/Serializable.md).Serializable

This class defines instances that can be serialized and deserialized.

## Hierarchy

- **`Serializable`**

  ↳ [`BaseType`](Type.BaseType.md)

## Table of contents

### Constructors

- [constructor](Serializable.Serializable.md#constructor)

### Methods

- [serialize](Serializable.Serializable.md#serialize)

## Constructors

### constructor

• **new Serializable**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[Serializable.ts:108](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Serializable.ts#L108)

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

[Serializable.ts:115](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Serializable.ts#L115)
