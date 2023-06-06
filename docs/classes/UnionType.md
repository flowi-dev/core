[@flowi-dev/core](../README.md) / [Exports](../modules.md) / UnionType

# Class: UnionType

## Hierarchy

- [`Type`](Type.md)

  ↳ **`UnionType`**

## Table of contents

### Constructors

- [constructor](UnionType.md#constructor)

### Properties

- [name](UnionType.md#name)
- [types](UnionType.md#types)

### Methods

- [check](UnionType.md#check)
- [extends](UnionType.md#extends)

## Constructors

### constructor

• **new UnionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`Type`](Type.md)[] |

#### Overrides

[Type](Type.md).[constructor](Type.md#constructor)

#### Defined in

[Type.ts:34](https://github.com/flowi-dev/core/blob/f9c2b6d/src/classes/Type.ts#L34)

## Properties

### name

• **name**: `string`

#### Inherited from

[Type](Type.md).[name](Type.md#name)

#### Defined in

[Type.ts:35](https://github.com/flowi-dev/core/blob/f9c2b6d/src/classes/Type.ts#L35)

___

### types

• `Readonly` **types**: [`Type`](Type.md)[]

#### Defined in

[Type.ts:36](https://github.com/flowi-dev/core/blob/f9c2b6d/src/classes/Type.ts#L36)

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

[Type.ts:50](https://github.com/flowi-dev/core/blob/f9c2b6d/src/classes/Type.ts#L50)

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

[Type.ts:41](https://github.com/flowi-dev/core/blob/f9c2b6d/src/classes/Type.ts#L41)
