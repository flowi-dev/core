[@flowi-dev/core](../README.md) / [Exports](../modules.md) / ArrayType

# Class: ArrayType

## Hierarchy

- [`Type`](Type.md)

  ↳ **`ArrayType`**

## Table of contents

### Constructors

- [constructor](ArrayType.md#constructor)

### Properties

- [name](ArrayType.md#name)
- [type](ArrayType.md#type)

### Methods

- [check](ArrayType.md#check)
- [extends](ArrayType.md#extends)

## Constructors

### constructor

• **new ArrayType**(`name`, `type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`Type`](Type.md) |

#### Overrides

[Type](Type.md).[constructor](Type.md#constructor)

#### Defined in

[Type.ts:154](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L154)

## Properties

### name

• **name**: `string`

#### Inherited from

[Type](Type.md).[name](Type.md#name)

#### Defined in

[Type.ts:155](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L155)

___

### type

• `Private` `Readonly` **type**: [`Type`](Type.md)

#### Defined in

[Type.ts:156](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L156)

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

[Type.ts:161](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L161)

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

[Type.ts:169](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L169)
