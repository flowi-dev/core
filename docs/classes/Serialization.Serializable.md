[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Serialization](../modules/Serialization.md) / Serializable

# Class: Serializable

[Serialization](../modules/Serialization.md).Serializable

This class defines instances that can be serialized and deserialized.

## Hierarchy

- [`SerializableData`](Serialization.SerializableData.md)

  ↳ **`Serializable`**

  ↳↳ [`BaseType`](Types.BaseType.md)

## Table of contents

### Constructors

- [constructor](Serialization.Serializable.md#constructor)

### Properties

- [\_](Serialization.Serializable.md#_)
- [name](Serialization.Serializable.md#name)

### Methods

- [serialize](Serialization.Serializable.md#serialize)

## Constructors

### constructor

• **new Serializable**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Overrides

[SerializableData](Serialization.SerializableData.md).[constructor](Serialization.SerializableData.md#constructor)

#### Defined in

[Serialization.ts:83](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L83)

## Properties

### \_

• **\_**: `string`

The class name

#### Overrides

[SerializableData](Serialization.SerializableData.md).[_](Serialization.SerializableData.md#_)

#### Defined in

[Serialization.ts:81](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L81)

___

### name

• `Readonly` **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[SerializableData](Serialization.SerializableData.md).[name](Serialization.SerializableData.md#name)

#### Defined in

[Serialization.ts:83](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L83)

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

[Serialization.ts:92](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L92)
