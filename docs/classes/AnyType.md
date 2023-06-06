[@flowi-dev/core](../README.md) / [Exports](../modules.md) / AnyType

# Class: AnyType

## Hierarchy

- [`Type`](Type.md)

  ↳ **`AnyType`**

## Table of contents

### Constructors

- [constructor](AnyType.md#constructor)

### Properties

- [name](AnyType.md#name)

### Methods

- [check](AnyType.md#check)
- [extends](AnyType.md#extends)

## Constructors

### constructor

• **new AnyType**()

#### Inherited from

[Type](Type.md).[constructor](Type.md#constructor)

## Properties

### name

• **name**: `string` = `'any'`

#### Overrides

[Type](Type.md).[name](Type.md#name)

#### Defined in

[Type.ts:163](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L163)

## Methods

### check

▸ **check**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Overrides

[Type](Type.md).[check](Type.md#check)

#### Defined in

[Type.ts:165](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L165)

___

### extends

▸ **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](Type.md) |

#### Returns

`boolean`

#### Overrides

[Type](Type.md).[extends](Type.md#extends)

#### Defined in

[Type.ts:169](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L169)
