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

[Type.ts:134](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L134)

## Properties

### name

• **name**: `string`

#### Inherited from

[Type](Type.md).[name](Type.md#name)

#### Defined in

[Type.ts:135](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L135)

___

### type

• `Private` `Readonly` **type**: [`Type`](Type.md)

#### Defined in

[Type.ts:136](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L136)

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

[Type.ts:141](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L141)

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

[Type.ts:149](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L149)
