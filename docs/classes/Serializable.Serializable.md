[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serializable](../modules/Serializable.md) / Serializable

# Class: Serializable

[Serializable](../modules/Serializable.md).Serializable

This class defines instances that can be serialized and deserialized.

## Hierarchy

- [`SerializableData`](Serializable.SerializableData.md)

  ↳ **`Serializable`**

  ↳↳ [`BaseType`](Type.BaseType.md)

## Table of contents

### Constructors

- [constructor](Serializable.Serializable.md#constructor)

### Properties

- [\_](Serializable.Serializable.md#_)
- [name](Serializable.Serializable.md#name)

### Methods

- [serialize](Serializable.Serializable.md#serialize)

## Constructors

### constructor

• **new Serializable**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Overrides

[SerializableData](Serializable.SerializableData.md).[constructor](Serializable.SerializableData.md#constructor)

#### Defined in

[Serializable.ts:124](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L124)

## Properties

### \_

• **\_**: `string`

The class name

#### Overrides

[SerializableData](Serializable.SerializableData.md).[_](Serializable.SerializableData.md#_)

#### Defined in

[Serializable.ts:122](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L122)

___

### name

• **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[SerializableData](Serializable.SerializableData.md).[name](Serializable.SerializableData.md#name)

#### Defined in

[Serializable.ts:124](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L124)

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

[Serializable.ts:133](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L133)
