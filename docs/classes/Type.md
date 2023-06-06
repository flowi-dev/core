[@flowi-dev/core](../README.md) / [Exports](../modules.md) / Type

# Class: Type

## Hierarchy

- **`Type`**

  ↳ [`PrimitiveType`](PrimitiveType.md)

  ↳ [`UnionType`](UnionType.md)

  ↳ [`ObjectType`](ObjectType.md)

  ↳ [`ArrayType`](ArrayType.md)

## Table of contents

### Constructors

- [constructor](Type.md#constructor)

### Properties

- [name](Type.md#name)

### Methods

- [check](Type.md#check)
- [extends](Type.md#extends)

## Constructors

### constructor

• **new Type**()

## Properties

### name

• `Abstract` **name**: `string`

#### Defined in

[Type.ts:3](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L3)

## Methods

### check

▸ `Abstract` **check**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Type.ts:5](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L5)

___

### extends

▸ `Abstract` **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[Type.ts:4](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L4)
