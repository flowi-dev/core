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

[Serialization.ts:79](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L79)

## Properties

### \_

• **\_**: `string`

The class name

#### Overrides

[SerializableData](Serialization.SerializableData.md).[_](Serialization.SerializableData.md#_)

#### Defined in

[Serialization.ts:77](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L77)

___

### name

• `Readonly` **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[SerializableData](Serialization.SerializableData.md).[name](Serialization.SerializableData.md#name)

#### Defined in

[Serialization.ts:79](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L79)

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

[Serialization.ts:88](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L88)
